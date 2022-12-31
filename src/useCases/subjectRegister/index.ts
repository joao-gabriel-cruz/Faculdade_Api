import { Connection } from '../../database/connection';
import { Subject } from '../../entities/Subject';

interface ISubjectRegisterRequest {
  id_teacher: string;
  id_student: string;
  name: string;
}

export class SubjectRegister {
  constructor(private connection: Connection) {}

  async execute({ id_teacher, id_student, name }: ISubjectRegisterRequest) {
    try {
      const subject = {
        id_teacher,
        id_student,
        name,
      };

      const newSubject = new Subject(subject);

      const params = newSubject.subject;

      await this.connection.insert('subject', [
        params.id_subject,
        params.name,
        params.id_teacher,
        params.id_student,
      ]);

      return true;
    } catch (error) {
      throw {
        message: 'Error on register subject',
        error,
      };
    }
  }
}
