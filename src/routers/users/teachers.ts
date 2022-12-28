import { Router } from 'express';
import { CreateTeacher } from '../../useCases/CreateUser/CreateTeacher';
import { Connection } from '../../database/connection';

const TeacherRouter = Router();

TeacherRouter.post('/create', async (request, response) => {
  const { name, cpf, subject, email } = request.body;
  const connection = new Connection();

  const createTeacher = new CreateTeacher(connection);

  const teacher = await createTeacher.execute({ name, cpf, subject, email });

  return response.json(teacher);
});

export { TeacherRouter };
