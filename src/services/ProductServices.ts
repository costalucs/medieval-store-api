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

  async insertProduct(prod: Product): Promise<Product> {
    const product = await this.model.insertProduct(prod);    
    return product;
  }

  async findOne(id:number): Promise<Product[]> {
    const res = await this.model.findOne(id); 
    return res;
  }

  async update(productsId: number[], orderId: number): Promise<number[]> {
    const prodIds = await Promise.all(
      productsId.map(async (itemId) => this.model.updateProducts(itemId, orderId)),
    );
    return prodIds;
  }
}