import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  async findOne(id: number): Promise<Product[] | []> {
    const [result] = await this.connection
      .query('SELECT * FROM Trybesmith.Products WHERE id = ?', [id]);
    return result as Product[];
  }

  async insertProduct({ name, amount }: Product): Promise<Product> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, name, amount };
  }

  async updateProducts(productId: number, orderId: number): Promise<number> {
    await this.connection
      .execute('UPDATE Trybesmith.Products SET orderId=(?) WHERE id=(?)', [orderId, productId]);
    return productId;
  }
}