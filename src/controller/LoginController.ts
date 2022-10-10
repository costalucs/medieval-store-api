import { Request, Response } from 'express';
import UserServices from '../services/UserServices';
import generateToken from '../utils/generateToken';
// import generateToken from '../utils/generateToken';

export default class LoginController {
  constructor(private loginService = new UserServices()) {}

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await this.loginService.findOne(username, password);
    if (!user) return res.status(401).json({ message: 'Username or password invalid' });
    
    const token = generateToken(user);

    return res.status(200).json({ token });
  };
}