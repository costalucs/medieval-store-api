import jwt, { JwtPayload } from 'jsonwebtoken';

export default function verifyToken(token: string | ''): JwtPayload {
  const user = jwt.verify(token, 'secret');
  return user as JwtPayload;
}