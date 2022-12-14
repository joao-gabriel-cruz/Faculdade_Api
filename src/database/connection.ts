const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER || 'postgres',
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'postgres',
  password: process.env.PASSWORD || 'postgres',
  port: process.env.PORT_DB || 5432,
});

export class Connection {
  async query(sql: string, params?: any[]) {
    try {
      const connection = await pool.connect();
      if (params) {
        const result = await connection.query(sql, params);
        connection.release();
        return result;
      } else {
        const result = await connection.query(sql);
        connection.release();
        return result;
      }
    } catch (err) {
      console.log('erro', err);
    }
  }
  async insert(table: string, params: any[]) {
    try {
      const values = params.map((_, index) => `$${index + 1}`).join(', ');
      const sql = `INSERT INTO ${table} VALUES (${values})`;
      const result = await this.query(sql, params);
      return result;
    } catch (err) {
      throw {
        message: 'Error creating student',
        error: err,
      };
    }
  }

  async selectBySubject(typeUser: string, subject: string) {
    try {
      console.log('typeUser', typeUser);
    } catch (err) {}
  }

  async select(table: string, campos: string[], where: string = '') {
    try {
      const sql = `SELECT ${campos.join(', ')} FROM ${table} ${where}`;
      console.log(sql);

      const result = await this.query(sql);
      return result?.rows || [];
    } catch (erro) {
      console.log('erro', erro);
    }
  }
}
