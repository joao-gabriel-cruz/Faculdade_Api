import { v4 } from 'uuid';

export interface TeacherProps {
  id_teacher?: string;
  name: string;
  cpf: string;
  subject: string;
  email: string;
  password?: string;
}

export class Teacher {
  private props: TeacherProps;

  constructor(props: TeacherProps) {
    this.props = {
      ...props,
      id_teacher: v4(),
      password: props.cpf,
    };
  }
  get teacher() {
    return this.props;
  }
}
