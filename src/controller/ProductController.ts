import { Request, Response } from 'express';
import ProductServices from '../services/ProductServices';

export default class ProductController {
  constructor(private productService = new ProductServices()) {}

  public getAll = async (_req:Request, response: Response) => {
    const products = await this.productService.getAll();
    response.status(200).json(products);
  };
}