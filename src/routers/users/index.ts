import { studentRouter } from './StudentRouter';
import { Router } from 'express';
import { Connection } from '../../database/connection';

const userRouter = Router();

userRouter.use('/students', studentRouter);

userRouter.post('/login', async (request, response) => {
  const role = request.body.role;

  if (role === 'student') {
    const { registration, password } = request.body;
    const connection = new Connection();
    const result = await connection.select('students', [
      'registration',
      'password',
    ]);
    if (
      result[0].registration === registration &&
      result[0].password === password
    ) {
      response.json(result);
      console.log(result);
    } else {
      response.status(500).send('Internal server error');
    }
  }
});

export { userRouter };
