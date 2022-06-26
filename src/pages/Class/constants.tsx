import { newDate } from "@/helpers/Dates";
import { GridColDef, GridNativeColTypes, GridValueGetterParams as GetParams } from "@mui/x-data-grid";
import * as RES from "@/models/response";

export const DATE_TIME_TYPE_COL: GridNativeColTypes = "dateTime";
export const KEY = "classes-key-table";
export const TITLE = `Gerenciar Turmas`;
export const NEW = `Novo`;
export const BACK = `Voltar`;
export const HTML_ID = {
  BOX: "semester-box",
  FORM: "semester-form",
  FIELD_NAME: "name",
  BUTTON_ADD: "button-semester-add",
  BUTTON_BACK: "button-semester-back",
  BUTTON_SAVE: "button-semester-form",
};

export const HTML_LABELLEDBY = {
  BUTTON_ADD: "button-semester-add",
  BUTTON_BACK: "button-semester-back",
};

export const S_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, width: 100 },
  { field: "name", headerName: "Nome", width: 200 },
  {
    field: "createdAt",
    headerName: "Criado Em",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetParams) => {
      const date = (params.row as RES.ClassDTO).createdAt;
      return newDate(date);
    },
  },
];

export const C_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, width: 100 },
  { field: "name", headerName: "Nome", width: 200 },
  {
    field: "teacherName",
    headerName: "Professor",
    width: 200,
    valueGetter: (params: GetParams) => {
      const row = params.row as RES.ClassDTO;
      return `${row.teacherId} - ${row.teacherName}`;
    },
  },
  {
    field: "semester",
    headerName: "Semestre",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetParams) => (params.row as RES.ClassDTO).semester.name,
  },
  {
    field: "createdAt",
    headerName: "Criado Em",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetParams) => new Date((params.row as RES.ClassDTO).createdAt),
  },
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
