import { Request, Response } from 'express';
import OrderServices from '../services/OrderServices';

export default class OrderController {
  constructor(private orderService = new OrderServices()) {}

  getAll = async (_req:Request, response: Response) => {
    const orders = await this.orderService.getAll();
    response.status(200).json(orders);
  };
}