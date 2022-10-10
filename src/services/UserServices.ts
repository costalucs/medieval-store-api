import { User } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

export default class UserServices {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async insertUser(user: User): Promise<User> {
    const result = await this.model.addUser(user);    
    return result;
  }

  async findOne(username: string, password: string): Promise<User> {
    const [result] = await this.model.findOneLogin(username, password);
    return result;
  }
}