import { Router } from 'express';
import { StudentRouter } from './students';
import { TeacherRouter } from './teachers';
import { Login } from '../../useCases/Login';
import { Connection } from '../../database/connection';

const UserRouter = Router();

UserRouter.use('/students', StudentRouter);
UserRouter.use('/teachers', TeacherRouter);

UserRouter.post('/login', (request, response) => {
  const { textKey, password, role } = request.body;
  const connection = new Connection();

  const login = new Login(connection);

  login.execute({ textKey, password, role });

  return response.json({ message: 'Login' });
});

export { UserRouter };
