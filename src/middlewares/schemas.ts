import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .required(),
  classe: Joi.string()
    .min(3)
    .required(),
  level: Joi.number()
    .min(1)
    .required(),
  password: Joi.string()
    .min(8)
    .required(),
});

const productSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  amount: Joi.string()
    .min(3)
    .required(),
});

export { userSchema, productSchema };
