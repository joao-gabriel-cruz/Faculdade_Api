const { Pool, Client } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

class Connection {
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
      console.log(err);
    }
  }
}

const connection = new Connection();
