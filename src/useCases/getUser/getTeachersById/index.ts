import { Connection } from '../../../database/connection';
import { Teacher } from '../../../entities/Teachers';

interface IGetTeachersRequest {
  params: [];
  id_teacher: string;
}

export class GetTeachersById {
  constructor(private connection: Connection) {}

  async execute(request: IGetTeachersRequest): Promise<Teacher[]> {
    const params = request.params.length !== 0 ? request.params : ['*'];

    console.log('params', params);
    console.log('id_teacher', request.id_teacher);

    const teachers = await this.connection.select(
      'teachers',
      params,
      `where id_teacher = '${request.id_teacher}'`
    );

    return teachers;
  }
}
