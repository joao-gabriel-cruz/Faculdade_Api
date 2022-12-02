import { Router, Request, Response } from 'express';
import { Connection } from '../../database/connection';

const studentRouter = Router();

studentRouter.get('/', async (request: Request, response: Response) => {
  try {
    const connection = new Connection();
    const result = await connection.select('students', ['name', 'id']);
    response.json(result);
    console.log(result);
  } catch (error) {
    response.status(500).send('Internal server error');
  }
});

studentRouter.post('/', async (request: Request, response: Response) => {
  try {
    const student = request.body;
    const connection = new Connection();
    const result = await connection.insert('students', [
      student.id,
      student.name,
      student.subject,
    ]);
    response.send('Student created');
    console.log(result.rows);
  } catch (err) {
    console.log(err);
    response.status(500).send('Internal server error');
  }
});

export { studentRouter };
