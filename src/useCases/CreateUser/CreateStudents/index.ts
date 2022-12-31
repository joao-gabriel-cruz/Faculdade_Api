import { Student } from '../../../entities/Students';
import { Connection } from '../../../database/connection';

interface ICreateStudentRequest {
  name: string;
  email: string;
  password: string;
  course: string;
  cpf: string;
  street: string;
  district: string;
  cep: string;
}

type CreateStudentResponse = Student;

export class CreateStudent {
  constructor(private connection: Connection) {}
  async execute(
    request: ICreateStudentRequest
  ): Promise<CreateStudentResponse> {
    try {
      const { name, email, course, cpf, street, district, cep } = request;

      const student = new Student({
        name,
        email,
        course,
        cpf,
        street,
        district,
        cep,
      });

      const params = student.student;

      await this.connection.insert('students', [
        params.id_student,
        params.registration,
        params.name,
        params.course,
        params.cpf,
        params.email,
        params.street,
        params.district,
        params.cep,
        params.password,
      ]);

      return student;
    } catch (error) {
      throw {
        message: 'Error creating student',
        error,
      };
    }
  }
}
