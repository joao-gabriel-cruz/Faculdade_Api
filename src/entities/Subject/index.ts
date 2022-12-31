import { v4 } from 'uuid';

export interface SubjectProps {
  id_subject?: string;
  id_teacher: string;
  id_student: string;
  name: string;
}

export class Subject {
  private props: SubjectProps;
  constructor(props: SubjectProps) {
    this.props = {
      ...props,
      id_subject: v4(),
    };
  }

  get subject() {
    return this.props;
  }
}
