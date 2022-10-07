import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import GenerateToken from '../utils/generateToken';

export default class UserController {
  constructor(private userService = new UserServices()) {}

  insertUser = async (req: Request, res: Response) => {
    const user = req.body;
    await this.userService.insertUser(user);
    const token = GenerateToken(user);
    res.status(201).json({ token });
  };
}