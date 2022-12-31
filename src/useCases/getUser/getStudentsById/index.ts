import { Connection } from '../../../database/connection';
import { Student } from '../../../entities/Students';

interface IGetStudentsRequest {
  params: [];
  id_student: string;
}

export class GetStudentsById {
  constructor(private connection: Connection) {}

  async execute(request: IGetStudentsRequest): Promise<any> {
    try {
      let params = request.params.length !== 0 ? request.params : ['*'];

      console.log('id_student', request.id_student);
      const students = await this.connection.select(
        'students',
        params,
        `where id_student = '${request.id_student}'`
      );

      console.log(students);

      return students;
    } catch (error) {
      console.log(error);
    }
  }
}
