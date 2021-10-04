import * as Joi from "joi";

export const validationSchema = Joi.object({
  API_TIMEZONE: Joi.string().required(),
  API_FORMAT_DATE_TIME: Joi.string().required(),
  API_PORT: Joi.number().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_PORT: Joi.number().required(),
  MONGO_DATABASE: Joi.string().required(),
});
