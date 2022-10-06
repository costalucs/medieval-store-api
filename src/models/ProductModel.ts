import { Pool } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProcuctModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products;');
    const [rows] = result;
    return rows as Product[];
  }
}