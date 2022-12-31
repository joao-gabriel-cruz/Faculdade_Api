import { response, Router } from 'express';
import { Student } from '../../entities/Students';
import { CreateStudent } from '../../useCases/CreateUser/CreateStudents';
import { Connection } from '../../database/connection';
import { GetStudentsById } from '../../useCases/getUser/getStudentsById';
const StudentRouter = Router();

StudentRouter.post('/create', (request, response) => {
  try {
    const { name, email, password, course, cpf, street, district, cep } =
      request.body;
    const connection = new Connection();
    const createStudent = new CreateStudent(connection);

    createStudent.execute({
      name,
      email,
      password,
      course,
      cpf,
      street,
      district,
      cep,
    });

    return response.status(201).json({
      message: 'Student created',
    });
  } catch (error) {
    return response.status(400).json({
      message: 'Error creating student',
    });
  }
});

StudentRouter.post('/list', async (request, response) => {
  try {
    const connection = new Connection();
    const getStudentsById = new GetStudentsById(connection);

    console.log(request.body);
    const students = await getStudentsById.execute(request.body);

    return response.send(students).status(200);
  } catch (error) {
    return response.status(400).json({
      message: 'Error getting students',
    });
  }
});

export { StudentRouter };
