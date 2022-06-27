import * as DTO from "@/models/global";
import * as REQ from "@/models/request";
import * as RES from "@/models/response";
import { List, Object, BFF_CLIENT } from "./clients";
import E from "./endpoints";

const GET = <DTO>(path: string) => BFF_CLIENT.get<DTO>(path);
const POST = <DTO>(path: string, body: any) => BFF_CLIENT.post<DTO>(path, body);

export const BFF = {
  SEMESTER: {
    LIST: (): List<RES.SemesterDTO> => GET(E.SEMESTERS),
    CREATE: (body: REQ.SemesterCreated): Object<DTO.Created> => POST(E.SEMESTERS, body),
  },
  CLASS: {
    LIST: (): List<RES.ClassDTO> => GET(E.CLASSES),
    CREATE: (body: REQ.ClassCreated): List<DTO.Created> => POST(E.CLASSES, body),
  },
  TEACHER: {
    LIST: (): List<RES.TeacherDTO> => GET(E.TEACHERS),
  },
  STUDENT: {
    LIST: (): List<RES.StudentDTO> => GET(E.STUDENT),
  },
};
