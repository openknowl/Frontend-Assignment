import fs = require('fs');
import { FastifyRequest, FastifyReply } from 'fastify';
import * as Joi from 'joi';
import jsonPath from 'lib/json-path';
import { orderByCompany, orderByCreatedAt } from 'lib/order-by';

import { content, query } from 'types/content';
import getQuerySchema from './schema';

if (!fs.existsSync(jsonPath('contents'))) {
  throw new Error(
    '`$ yarn create:mock` 명령어를 입력하여 목업 데이터를 먼저 만들어 주세요.',
  );
}
const mockContents: content[] = require(jsonPath('contents'));

export default class ContentCtrl {
  static getContentList = async (
    req: FastifyRequest<{ Querystring: query }>,
    reply: FastifyReply,
  ) => {
    const validateResult: Joi.ValidationResult<string> =
      getQuerySchema.validate(req.query);

    if (validateResult.error) {
      const message = validateResult.error.details[0].message;
      return reply.code(400).send(message);
    }

    const { limit, cursor, orderBy, keyword } = req.query;

    let contentList = mockContents;
    if (keyword) {
      contentList = mockContents.filter((content: content) =>
        content.company.includes(keyword),
      );
    }

    const orderByContentList =
      orderBy === 'company'
        ? orderByCompany(contentList)
        : orderByCreatedAt(contentList);

    const findCursor = orderByContentList.findIndex(
      (content: content) => content.id === Number(cursor),
    ); // cursor가 0이면 findCursor === -1

    const returnContentList = orderByContentList.slice(
      findCursor + 1,
      findCursor + 1 + Number(limit),
    );

    reply.code(200).send(returnContentList);
  };
}
