import { Connection } from '../../../database/connection';

interface IGetStudentsBySubjectRequest {
  typeUser: string;
  subject: string;
}

export class GetStudentsBySubject {
  constructor(private connection: Connection) {}

  async execute(request: IGetStudentsBySubjectRequest) {
    const { typeUser, subject } = request;

    const students = await this.connection.selectBySubject(typeUser, subject);

    return students;
  }
}
