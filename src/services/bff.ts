import * as DTO from "@/models/dto/auth";
import { SemesterCreated } from "@/models/request/semester";
import { List, Object, bff } from "./clients";
import E from "./endpoints";

export const API = {
  SEMESTER: {
    LIST: (): List<string> => bff.get<Array<string>>(E.TYPE_LIST()),
    CREATE: (body: SemesterCreated): Object<DTO.Created> => bff.post(E.TEACHER_CREATE(), body),
  },
  TYPE: {
    TYPE_LIST: (): List<string> => bff.get<Array<string>>(E.TYPE_LIST()),
  },
  TITLE: {
    TITLE_LIST: (): List<string> => bff.get<Array<string>>(E.TITLE_LIST()),
  },
  CLASS: {
    CLASS_LIST: (): List<string> => bff.get<Array<string>>(E.CLASS_LIST()),
  },
  TEACHER: {
    TEACHER_LIST: (): List<string> => bff.get<Array<string>>(E.TEACHER_LIST()),
    TEACHER_CREATE: (body: string): Object<string> => bff.post(E.TEACHER_CREATE(), body),
    TEACHER_DETAILS: (id: string): Object<string> => bff.get(E.TEACHER_DETAILS(id)),
    TEACHER_EDIT: (id: string, body: string): Object<string> => bff.put(E.TEACHER_EDIT(id), body),
  },
  STUDENT: {
    STUDENT_LIST: (): List<string> => bff.get<Array<string>>(E.STUDENT_LIST()),
    STUDENT_CREATE: (body: string): Object<string> => bff.post(E.STUDENT_CREATE(), body),
    STUDENT_DETAILS: (id: string): Object<string> => bff.get(E.STUDENT_DETAILS(id)),
    STUDENT_EDIT: (id: string, body: string): Object<string> => bff.put(E.STUDENT_EDIT(id), body),
  },
  PROPOSAL: {
    PROPOSAL_LIST: (): List<string> => bff.get<Array<string>>(E.PROPOSAL_LIST()),
    PROPOSAL_CREATE: (body: string): Object<string> => bff.post(E.PROPOSAL_CREATE(), body),
    PROPOSAL_DETAILS: (id: string): Object<string> => bff.get(E.PROPOSAL_DETAILS(id)),
    PROPOSAL_EDIT: (id: string, body: string): Object<string> => bff.put(E.PROPOSAL_EDIT(id), body),
  },
  EXAMINATION: {
    EXAMINATION_CREATE: (body: string): Object<string> => bff.post(E.EXAMINATION_CREATE(), body),
    EXAMINATION_DETAILS: (id: string): Object<string> => bff.get(E.EXAMINATION_DETAILS(id)),
    EXAMINATION_EDIT: (id: string, body: string): Object<string> => bff.put(E.EXAMINATION_EDIT(id), body),
  },
  BOARD: {
    BOARD_CREATE: (body: string): Object<string> => bff.post(E.BOARD_CREATE(), body),
    BOARD_DETAILS: (id: string): Object<string> => bff.get(E.BOARD_DETAILS(id)),
    BOARD_EDIT: (id: string, body: string): Object<string> => bff.put(E.BOARD_EDIT(id), body),
  },
};
