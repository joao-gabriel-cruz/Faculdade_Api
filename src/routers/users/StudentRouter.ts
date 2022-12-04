import { Router, Request, Response } from 'express';
import { StudentsType } from '../../@types/students';
import { Connection } from '../../database/connection';
import { Student } from '../../model/users/students';

const studentRouter = Router();

studentRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { search, where } = request.body;

    const connection = new Connection();
    console.log('where', where);

    const result = await connection.select(
      'students',
      search,
      where && `WHERE registration = '${where}'`
    );

    if (result.length === 0) {
      return response.json({
        message: 'Student found',
      });
    }
    response.json(result);
  } catch (error) {
    response.status(500).send('Internal server error');
  }
});

studentRouter.post('/create', async (request: Request, response: Response) => {
  try {
    const student: StudentsType = request.body;

    const newStudent = new Student({ ...student });

    await newStudent.saveDataBase('students', { ...newStudent });

    response.send({ newStudent }).status(201);
  } catch (error) {
    response.status(500).send('Internal server error');
  }
});

export { studentRouter };
