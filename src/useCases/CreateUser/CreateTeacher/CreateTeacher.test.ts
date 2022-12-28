import { test, expect } from 'vitest';
import { CreateTeacher } from './';
import { Connection } from '../../../database/connection';
import { Teacher } from '../../../entities/Teachers';

test('CreateTeacher', async () => {
  const connection = new Connection();
  const teacher = new CreateTeacher(connection);
  const result = await teacher.execute({
    name: 'teste',
    cpf: '123456789',
    subject: 'matematica',
    email: '',
  });
  expect(result).instanceOf(Teacher);
});
