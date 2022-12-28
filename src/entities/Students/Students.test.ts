import { test, expect } from 'vitest';
import { Student } from './index';

test('test', () => {
  const student = new Student({
    name: 'John Doe',
    email: 'JohnDoe@gmail.com',
    CEP: '12345678',
    CPF: '12345678910',
    course: 'Computer Science',
    district: 'Doe',
    password: '123456',
    street: 'Doe Street',
  });
  expect(student).toBeInstanceOf(Student);
});
