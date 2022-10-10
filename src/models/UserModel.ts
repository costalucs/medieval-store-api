import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async addUser({ username, classe, level, password }: User): Promise<User> {
    const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?,?,?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    return { id: insertId, username, classe, level, password };
  }

  async findOneLogin(userName: string, password: string): Promise<User[] | []> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username =(?) AND password= (?)';
    const [user] = await this.connection.execute(query, [userName, password]);
    return user as User[];
  }
}