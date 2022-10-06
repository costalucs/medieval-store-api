import { Product } from '../interfaces';
import connection from '../models/connection';
import ProcuctModel from '../models/ProductModel';

export default class ProductServices {
  model: ProcuctModel;

  constructor() {
    this.model = new ProcuctModel(connection);
  }

  async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}