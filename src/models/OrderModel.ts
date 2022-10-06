import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(`
      SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds
      FROM Trybesmith.Orders as orders
      INNER JOIN Trybesmith.Products as products
      ON orders.id = products.orderId
      GROUP BY orders.id
      ORDER BY orders.userId;
    `);
    const [rows] = result;
    return rows as Order[];
  }
}