import { Connection } from '../../database/connection';

export class User {
  async saveDataBase(table: string, data: any) {
    try {
      data = Object.values(data);

      const connection = new Connection();
      const result = await connection.insert(table, data);
      return result;
    } catch (err) {
      console.log(err);
      throw {
        error: true,
        message: 'Erro ao salvar no banco de dados' + err,
      };
    }
  }
}
