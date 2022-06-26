import { newDate } from "@/helpers/Dates";
import { GridColDef, GridNativeColTypes, GridValueGetterParams as GetterParams } from "@mui/x-data-grid";
import * as RES from "@/models/response";

export const DATE_TIME_TYPE_COL: GridNativeColTypes = "dateTime";
export const KEY = "classes-key-table";
export const TITLE = `Gerenciar Turmas`;
export const NEW_SEMESTER = `Novo Semestre`;

export const S_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, width: 100 },
  { field: "name", headerName: "Nome", width: 200 },
  {
    field: "createdAt",
    headerName: "Criado Em",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetterParams) => {
      const date = (params.row as RES.ClassDTO).createdAt;
      return newDate(date);
    },
  },
];

export const C_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, width: 100 },
  { field: "name", headerName: "Nome", width: 200 },
  //   { field: "teacherName", headerName: "Professor", width: 200 },
  { field: "teacherId", headerName: "Professor", width: 200 },
  {
    field: "semester",
    headerName: "Semestre",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetterParams) => params.row.semester.name,
  },
  {
    field: "createdAt",
    headerName: "Criado Em",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetterParams) => {
      const date = (params.row as RES.ClassDTO).createdAt;
      return newDate(date);
    },
  },
  {
    field: "students",
    headerName: "Alunos",
    type: DATE_TIME_TYPE_COL,
    sortable: true,
    width: 200,
    valueGetter: (params: GetterParams) => {
      const students = params.row.students as Array<RES.ClassDTO>;
      return students.length || -1;
    },
  },
];
