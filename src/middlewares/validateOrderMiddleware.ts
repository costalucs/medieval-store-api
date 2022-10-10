import { NextFunction, Request, Response } from 'express';
import { orderSchema } from './schemas';

export default function validateOrderMiddleware(req: Request, res: Response, next: NextFunction) {
  const order = req.body;
  const validate = orderSchema.validate(order);

  if (validate.error) {
    const { type, message } = validate.error.details[0];
    const statusCode = type === 'any.required' ? 400 : 422;
    return res.status(statusCode).json({ message });
  }

  return next();
}