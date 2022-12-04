import { StudentsType } from '../../@types/students';
import { Connection } from '../../database/connection';
import { User } from './users';

export class Student extends User {
  private registration = 0;
  private name = '';
  private course = '';
  private cpf = '';
  private email = '';
  private street = '';
  private street_number = 0;
  private district = '';
  private cep = '';
  private password = '';

  constructor({
    name,
    course,
    cpf,
    email,
    street,
    street_number,
    district,
    cep,
  }: StudentsType) {
    super();
    this.registration = Math.floor(Math.random() * 1000000000);
    this.name = name;
    this.course = course;
    this.cpf = cpf;
    this.email = email;
    this.street = street;
    this.street_number = street_number;
    this.district = district;
    this.cep = cep;
    this.password = cpf;
  }
}
