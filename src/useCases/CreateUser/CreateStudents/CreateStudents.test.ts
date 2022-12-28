import { expect, test } from 'vitest';
import { CreateStudent } from '.';
import { Connection } from '../../../database/connection';
import { Student } from '../../../entities/Students';

test('Create student', async () => {
  const connection = new Connection();
  const createStudent = new CreateStudent(connection);

  const student = {
    name: 'Test',
    email: '',
    password: '',
    course: '',
    CPF: '',
    street: '',
    district: '',
    CEP: '',
  };
  const result = await createStudent.execute(student);

  expect(result).toBeInstanceOf(Student);
});
