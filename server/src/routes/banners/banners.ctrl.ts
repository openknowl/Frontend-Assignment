import fs = require('fs');
import { FastifyRequest, FastifyReply } from 'fastify';
import * as Joi from 'joi';
import jsonPath from 'lib/json-path';

import { banner, query } from 'types/banner';
import getQuerySchema from './schema';

if (!fs.existsSync(jsonPath('banners'))) {
  throw new Error(
    '`$ yarn create:mock` 명령어를 입력하여 목업 데이터를 먼저 만들어 주세요.',
  );
}
const mockBanners: banner[] = require(jsonPath('banners'));

export default class BannerCtrl {
  static getBannerList = async (
    req: FastifyRequest<{ Querystring: query }>,
    reply: FastifyReply,
  ) => {
    const validateResult: Joi.ValidationResult<string> =
      getQuerySchema.validate(req.query);

    if (validateResult.error) {
      reply.status(400).send(validateResult.error.details[0].message);
    }

    const limit = Number(req.query.limit);

    const bannerList = mockBanners.slice(0, limit);

    reply.status(200).send(bannerList);
  };
}
