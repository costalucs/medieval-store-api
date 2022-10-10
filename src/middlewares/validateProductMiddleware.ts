import { NextFunction, Request, Response } from 'express';
import { productSchema } from './schemas';

export default function validateProductMiddleware(req: Request, res: Response, next: NextFunction) {
  const product = req.body;
  const validate = productSchema.validate(product);

  if (validate.error) {
    const { type, message } = validate.error.details[0];
    const statusCode = type === 'any.required' ? 400 : 422;
    return res.status(statusCode).json({ message });
  }

  return next();
}