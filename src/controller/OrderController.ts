import { Request, Response } from 'express';
import OrderServices from '../services/OrderServices';
import ProductServices from '../services/ProductServices';
import verifyToken from '../utils/verifyToken';

export default class OrderController {
  constructor(private orderService = new OrderServices()) {}

  getAll = async (_req:Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  addOrder = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const token = req.header('Authorization');

    const { id } = verifyToken(token as string);

    const orderId = await this.orderService.addOrder(id);

    const productService = new ProductServices();
    await productService.update(productsIds, orderId);

    return res.status(201).json({ userId: id, productsIds });
  };
}