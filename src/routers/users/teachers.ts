import { Router } from 'express';
import { CreateTeacher } from '../../useCases/CreateUser/CreateTeacher';
import { Connection } from '../../database/connection';
import { GetTeachersById } from '../../useCases/getUser/getTeachersById';

const TeacherRouter = Router();

TeacherRouter.post('/create', async (request, response) => {
  const { name, cpf, subject, email } = request.body;
  const connection = new Connection();

  const createTeacher = new CreateTeacher(connection);

  const teacher = await createTeacher.execute({ name, cpf, subject, email });

  return response.json(teacher);
});

TeacherRouter.post('/list', async (request, response) => {
  try {
    const connection = new Connection();
    const getTeachersById = new GetTeachersById(connection);

    const teachers = await getTeachersById.execute(request.body);

    return response.send(teachers).status(200);
  } catch (error) {
    return response.status(400).json({
      message: 'Error getting teachers',
    });
  }
});

export { TeacherRouter };
