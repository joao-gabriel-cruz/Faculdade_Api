import { v4 } from 'uuid';

export interface StudentProps {
  registration?: number;
  name: string;
  email: string;
  password?: string;
  id_student?: string;
  course: string;
  cpf: string;
  street: string;
  district: string;
  cep: string;
}

export class Student {
  private props: StudentProps;

  constructor(props: StudentProps) {
    this.props = {
      ...props,
      id_student: v4(),
      registration: Math.floor(Math.random() * 1000000000),
      password: props.cpf,
    };
  }
  get student() {
    return this.props;
  }

  isStudent(Object: any) {
    return Object instanceof Student;
  }
}
