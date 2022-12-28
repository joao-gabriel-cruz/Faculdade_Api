import { response, Router } from 'express';
import { Student } from '../../entities/Students';
import { CreateStudent } from '../../useCases/CreateUser/CreateStudents';
import { Connection } from '../../database/connection';
const StudentRouter = Router();

StudentRouter.post('/create', (request, response) => {
  try {
    const { name, email, password, course, cpf, street, district, cep } =
      request.body;
    const connection = new Connection();
    const createStudent = new CreateStudent(connection);

    const student = {
      name,
      email,
      password,
      course,
      cpf,
      street,
      district,
      cep,
    };

    createStudent.execute(student);

    return response.status(201).json({
      message: 'Student created',
    });
  } catch (error) {
    return response.status(400).json({
      message: 'Error creating student',
    });
  }
});

export { StudentRouter };
