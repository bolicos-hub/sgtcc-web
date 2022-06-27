import { newDate } from "@/helpers/Dates";
import { GridColDef, GridNativeColTypes, GridValueGetterParams as GetParams } from "@mui/x-data-grid";
import * as RES from "@/models/response";

export const DATE_TIME_TYPE_COL: GridNativeColTypes = "dateTime";
export const TEXT = {
  TITLE: "Gerenciar Turmas",
  NEW: "Novo",
  BACK: "Voltar",
  REFRESH: "Atualizar",
};

export const HTML = {
  ID: {
    CONTAINER: "classes-conatiner",
    STACK_HEADER: "classes-tack-header",
    STACK_TABLES: "classes-tack-tables",
    STACK_BUTTONS: "classes-tack-buttons",
    TYPOGRAFY: "classes-title",
    BUTTON_ADD: "classes-button-add",
    BUTTON_BACK: "classes-button-back",
    BUTTON_REFRESH: "classes-button-refesh",
  },
  KEY: {
    SEMESTER_TABLE: "classes-key-table",
    CLASS_TABLE: "classes-key-table",
  },
  LABELLEDBY: {
    BUTTON_ADD: "classes-button-add",
    BUTTON_BACK: "classes-button-back",
    BUTTON_REFRESH: "classes-button-refesh",
  },
};

const generateColumn = (
  field: string,
  headerName: string,
  width: number,
  sortable?: boolean,
  valueGetter?: (params: GetParams) => any | undefined,
  type?: string | undefined
) => ({
  field,
  headerName,
  width,
  sortable,
  valueGetter,
  type,
});

const valueGeeterCreatedAt = (params: GetParams) => newDate(params.row.createdAt);
const valueGeeterTeacher = (params: GetParams) => `${params.row.teacherId} - ${params.row.teacherName}`;
const valueGeeterSemester = (params: GetParams) => params.row.semester.name;

export const SEMESTER_COLUMNS: GridColDef[] = [
  generateColumn("id", "ID", 100, true),
  generateColumn("name", "Nome", 200, true),
  generateColumn("createdAt", "Criado Em", 200, true, valueGeeterCreatedAt),
];

export const CLASS_COLUMNS: GridColDef[] = [
  generateColumn("id", "ID", 50, true),
  generateColumn("name", "Nome", 200, true),
  generateColumn("teacherName", "Professor", 200, true, valueGeeterTeacher),
  generateColumn("semester", "Semestre", 100, true, valueGeeterSemester, DATE_TIME_TYPE_COL),
  generateColumn("createdAt", "Criado Em", 200, true, valueGeeterCreatedAt),
  {
    field: "students",
    headerName: "Alunos",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetParams) => {
      const students = params.row.students as Array<RES.ClassDTO>;
      return students.length || -1;
    },
  },
];
