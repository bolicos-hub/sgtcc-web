import * as DTO from "@/models/global";

export type StudentDTO = DTO.BaseModelDTO & {
  registration: string;
  name: string;
  email: string;
  phone: string;
  status: string;
};

export type TeacherDTO = DTO.BaseModelDTO & {
  registration: string;
  name: string;
  email: string;
  phone: string;
  lattes: string;
};

export type GradeDTO = StudentDTO & {
  note: number;
};

export type SemesterDTO = DTO.BaseDTO & {
  name: string;
};

export type ClassDTO = DTO.BaseDTO & {
  name: string;
  semester: SemesterDTO;
  teacherName: string;
  teacherId: string;
  students: Array<GradeDTO>;
};
