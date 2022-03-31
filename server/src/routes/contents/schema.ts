import * as Joi from 'joi';

const getQuerySchema = Joi.object().keys({
  orderBy: Joi.string().valid('createdAt', 'company').required(),
  page: Joi.number().integer().min(1).required(),
  limit: Joi.number().integer().min(1).required(),
  keyword: Joi.string().optional(),
});

export default getQuerySchema;
