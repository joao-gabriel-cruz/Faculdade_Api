import { test, expect } from 'vitest';
import { Teacher } from './';

test('CreateTeacher', () => {
  const teacher = new Teacher({
    name: 'teste',
    cpf: '123456789',
    subject: 'matematica',
    email: '',
  });
  expect(teacher).instanceOf(Teacher);
});
