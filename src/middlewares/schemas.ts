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

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().options({ convert: false }).required())
    .required().messages({
      'number.base': '"productsIds" must include only numbers',
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
});

export { userSchema, productSchema, orderSchema };
