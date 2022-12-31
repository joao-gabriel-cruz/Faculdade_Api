import { Connection } from '../../database/connection';

interface ILoginRequest {
  textKey: string;
  password: string;
  role: string;
}

export class Login {
  constructor(private connection: Connection) {}

  async execute(request: ILoginRequest) {
    try {
      const { role } = request;
      let user = '';

      switch (role) {
        case 'teacher':
          user = await this.TeacherLogin(request);
          break;
        case 'student':
          user = await this.StudentLogin(request);
          break;
        default:
          throw {
            message: 'Role not found',
            error: true,
          };
      }
      return user;
    } catch (error) {
      throw {
        message: 'Error on login',
        error,
      };
    }
  }

  private async TeacherLogin(request: ILoginRequest) {
    try {
      const { textKey, password } = request;

      const teacher = await this.connection.select(
        'teachers',
        ['email', 'password'],
        `where email = '${textKey}' AND password = '${password}'`
      );
      if (teacher.length === 0) {
        throw {
          message: 'Teacher not found',
          error: true,
        };
      }
      return teacher;
    } catch (error) {
      throw {
        message: 'Error on login',
        error,
      };
    }
  }

  private async StudentLogin(request: ILoginRequest) {
    try {
      const { textKey, password } = request;

      const student = await this.connection.select(
        'students',
        ['registration', 'password'],
        `where registration = '${textKey}' AND password = '${password}'`
      );
      console.log(student);

      if (student.length === 0) {
        throw {
          message: 'Student not found',
          error: true,
        };
      }
      return student;
    } catch (error) {
      console.log(error);

      throw {
        message: 'Error on login',
        error: true,
      };
    }
  }
}
