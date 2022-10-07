import jwt from 'jsonwebtoken';
import { User } from '../interfaces';

export default function generateToken(user: User): string {
  const payload = { id: user.id, name: user.username };
  const token = jwt.sign(payload, 'secret');
  return token;
}