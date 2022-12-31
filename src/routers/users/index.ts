import { Router } from 'express';
import { StudentRouter } from './students';
import { TeacherRouter } from './teachers';
import { Login } from '../../useCases/Login';
import { Connection } from '../../database/connection';
import { SubjectRegister } from '../../useCases/subjectRegister';
import { generateToken } from '../../Auth/genereteToken';
import { verifyToken } from '../../Auth/verifyToken';

const UserRouter = Router();

UserRouter.use('/students', verifyToken, StudentRouter);
UserRouter.use('/teachers', verifyToken, TeacherRouter);

UserRouter.post('/login', async (request, response) => {
  try {
    const { textKey, password, role } = request.body;
    const connection = new Connection();

    const login = new Login(connection);

    const user = await login.execute({ textKey, password, role });

    const token = generateToken(user[0]);

    return response.json({ token: token });
  } catch (error) {
    return response.status(400).json({ message: 'Error on login', error });
  }
});

UserRouter.post('/subjectRegister', async (request, response) => {
  try {
    const { id_teacher, id_student, name } = request.body;
    const connection = new Connection();

    if (!id_teacher || !id_student || !name)
      return response.status(400).json({ message: 'Missing params' });

    const subjectRegister = new SubjectRegister(connection);

    await subjectRegister.execute({ id_teacher, id_student, name });

    return response.json({ message: 'Subject registered' });
  } catch (error) {
    return response.status(400).json({ message: 'Error on register subject' });
  }
});

UserRouter.post('/findUserBySubject', async (request, response) => {});

export { UserRouter };
