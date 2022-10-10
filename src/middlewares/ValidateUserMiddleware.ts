import { NextFunction, Request, Response } from 'express';

import { userSchema } from './schemas';

export default function ValidateUserMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  const validate = userSchema.validate(user);  
  
  if (validate.error) {
    if (validate.error?.details[0].type === 'any.required') {
      return res
        .status(400).json({ message: validate.error.details[0].message });
    }
    return res.status(422).json({ message: validate.error?.details[0].message });
  }
  
  return next();
}