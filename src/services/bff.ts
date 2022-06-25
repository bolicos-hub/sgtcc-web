import * as DTO from "@/models/dto/global";
import { SemesterCreated } from "@/models/request/semester";
import { SemesterDTO } from "@/models/response/semester";
import { List, Object, BFF_CLIENT } from "./clients";
import E from "./endpoints";

const GET = <DTO>(path: string) => BFF_CLIENT.get<DTO>(path);
const POST = <DTO>(path: string, body: any) => BFF_CLIENT.post<DTO>(path, body);

export const BFF = {
  SEMESTER: {
    LIST: (): List<SemesterDTO> => GET(E.SEMESTERS),
    CREATE: (body: SemesterCreated): Object<DTO.Created> => POST(E.SEMESTERS, body),
  },
  TYPE: {
    TYPE_LIST: (): List<string> => BFF_CLIENT.get<Array<string>>(E.TYPE_LIST()),
  },
  TITLE: {
    TITLE_LIST: (): List<string> => BFF_CLIENT.get<Array<string>>(E.TITLE_LIST()),
  },
  CLASS: {
    CLASS_LIST: (): List<string> => BFF_CLIENT.get<Array<string>>(E.CLASS_LIST()),
  },
  TEACHER: {
    TEACHER_LIST: (): List<string> => BFF_CLIENT.get<Array<string>>(E.TEACHER_LIST()),
    TEACHER_CREATE: (body: string): Object<string> => BFF_CLIENT.post(E.TEACHER_CREATE(), body),
    TEACHER_DETAILS: (id: string): Object<string> => GET(E.TEACHER_DETAILS(id)),
    TEACHER_EDIT: (id: string, body: string): Object<string> => BFF_CLIENT.put(E.TEACHER_EDIT(id), body),
  },
  STUDENT: {
    STUDENT_LIST: (): List<string> => BFF_CLIENT.get<Array<string>>(E.STUDENT_LIST()),
    STUDENT_CREATE: (body: string): Object<string> => BFF_CLIENT.post(E.STUDENT_CREATE(), body),
    STUDENT_DETAILS: (id: string): Object<string> => BFF_CLIENT.get(E.STUDENT_DETAILS(id)),
    STUDENT_EDIT: (id: string, body: string): Object<string> => BFF_CLIENT.put(E.STUDENT_EDIT(id), body),
  },
  PROPOSAL: {
    PROPOSAL_LIST: (): List<string> => BFF_CLIENT.get<Array<string>>(E.PROPOSAL_LIST()),
    PROPOSAL_CREATE: (body: string): Object<string> => BFF_CLIENT.post(E.PROPOSAL_CREATE(), body),
    PROPOSAL_DETAILS: (id: string): Object<string> => BFF_CLIENT.get(E.PROPOSAL_DETAILS(id)),
    PROPOSAL_EDIT: (id: string, body: string): Object<string> => BFF_CLIENT.put(E.PROPOSAL_EDIT(id), body),
  },
  EXAMINATION: {
    EXAMINATION_CREATE: (body: string): Object<string> => BFF_CLIENT.post(E.EXAMINATION_CREATE(), body),
    EXAMINATION_DETAILS: (id: string): Object<string> => BFF_CLIENT.get(E.EXAMINATION_DETAILS(id)),
    EXAMINATION_EDIT: (id: string, body: string): Object<string> => BFF_CLIENT.put(E.EXAMINATION_EDIT(id), body),
  },
  BOARD: {
    BOARD_CREATE: (body: string): Object<string> => BFF_CLIENT.post(E.BOARD_CREATE(), body),
    BOARD_DETAILS: (id: string): Object<string> => BFF_CLIENT.get(E.BOARD_DETAILS(id)),
    BOARD_EDIT: (id: string, body: string): Object<string> => BFF_CLIENT.put(E.BOARD_EDIT(id), body),
  },
};
