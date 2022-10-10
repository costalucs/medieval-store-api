import { Order } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderServices {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  async addOrder(id: number): Promise<number> {
    const idOrder = await this.model.addOrder(id);
    return idOrder;
  }
}