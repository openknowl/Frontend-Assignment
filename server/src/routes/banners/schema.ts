import * as Joi from 'joi';

const getQuerySchema = Joi.object().keys({
  limit: Joi.number().integer().min(1).required(),
});

export default getQuerySchema;
