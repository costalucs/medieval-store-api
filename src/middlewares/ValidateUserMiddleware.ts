import { NextFunction, Request, Response } from 'express';

import { userSchema } from './schemas';

export default function ValidateUserMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  const validate = userSchema.validate(user);  
  
  if (validate.error) {
    const { type, message } = validate.error.details[0];
    const statusCode = type === 'any.required' ? 400 : 422;
    return res.status(statusCode).json({ message });
  }
  
  return next();
}