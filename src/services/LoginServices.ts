import connection from '../models/connection';
import UserModel from '../models/UserModel';

export default class LoginServices {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  // async getAll(): Promise<Order[]> {
  //   const orders = await this.model.getAll();
  //   return orders;
  // }
}