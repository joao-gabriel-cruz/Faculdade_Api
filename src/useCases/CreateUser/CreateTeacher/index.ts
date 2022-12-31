import { Connection } from '../../../database/connection';
import { Teacher } from '../../../entities/Teachers';

interface ICreateTeacherRequest {
  name: string;
  cpf: string;
  subject: string;
  email: string;
}

export class CreateTeacher {
  constructor(private connection: Connection) {}

  async execute(request: ICreateTeacherRequest): Promise<Teacher> {
    const { name, cpf, subject, email } = request;
    const newTeacher = new Teacher({ name, cpf, subject, email });

    const params = newTeacher.teacher;

    await this.connection.insert('teachers', [
      params.id_teacher,
      params.name,
      params.cpf,
      params.subject,
      params.email,
      params.password,
    ]);

    return newTeacher;
  }
}
