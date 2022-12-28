import { expect, test } from 'vitest';
import { Login } from './';
import { Connection } from '../../database/connection';

test('Login Student', () => {
  const connection = new Connection();
  const login = new Login(connection);

  const Student = {
    textKey: '37749166',
    password: '642-751-247-02',
    role: 'student',
  };

  const result = login.execute(Student);

  expect(result).toBe(true);
});

test('Login Teacher', () => {
  const connection = new Connection();
  const login = new Login(connection);

  const Teacher = {
    textKey: 'joao@test.com',
    password: '148148148',
    role: 'teacher',
  };

  const result = login.execute(Teacher);

  expect(result).toBe(true);
});
