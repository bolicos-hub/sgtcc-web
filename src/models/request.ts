export type SemesterCreated = {
  name: string;
};

export type ClassCreated = {
  name: string;
  teacherId: string;
  semesterId: number;
  students: Array<string>;
};

export type StudentCreated = {
  email: string;
  name: string;
  phone: string;
  registration: string;
};

export type TeacherCreated = {
  email: string;
  name: string;
  phone: string;
  lattes: string;
  registration: string;
};
