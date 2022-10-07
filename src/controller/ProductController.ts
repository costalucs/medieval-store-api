import { Request, Response } from 'express';
import ProductServices from '../services/ProductServices';

export default class ProductController {
  constructor(private productService = new ProductServices()) {}

  getAll = async (_req:Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  insertProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const result = await this.productService.insertProduct(product);
    res.status(201).json(result);
  };

  getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.productService.findOne(+id);
    res.status(201).json(result);
  };
}