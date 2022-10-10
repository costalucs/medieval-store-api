import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, 'secret');
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }

  return next();
}