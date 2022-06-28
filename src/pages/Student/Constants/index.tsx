import { newDate } from "@/helpers/Dates";
import { GridColDef, GridNativeColTypes, GridValueGetterParams as GetParams } from "@mui/x-data-grid";

export const DATE_TIME_TYPE_COL: GridNativeColTypes = "dateTime";
export const TEXT = {
  TITLE: "Gerenciar Alunos",
  DELETE: "Excluir",
  REFRESH: "Atualizar",
};

export const HTML = {
  ID: {
    CONTAINER: "students-conatiner",
    STACK_HEADER: "students-tack-header",
    STACK_TABLES: "students-tack-tables",
    STACK_BUTTONS: "students-tack-buttons",
    TYPOGRAFY: "students-title",

    BUTTON_DELETE: "students-button-delete",
    BUTTON_REFRESH: "students-button-refesh",
  },
  KEY: {
    STUDENT_TABLE: "students-key-table",
  },
  LABELLEDBY: {
    BUTTON_DELETE: "students-button-delete",
    BUTTON_REFRESH: "students-button-refesh",
  },
};

const generateColumn = (
  field: string,
  headerName: string,
  width: number,
  sortable?: boolean,
  valueGetter?: (params: GetParams) => any | undefined,
  type?: string | undefined,
  hide?: boolean | undefined
) => ({
  field,
  headerName,
  width,
  sortable,
  valueGetter,
  type,
  hide,
});

const valueGeeterCreatedAt = (params: GetParams) => newDate(params.row.createdAt);

export const STUDENT_COLUMNS: GridColDef[] = [
  generateColumn("registration", "Matricula", 100, true),
  generateColumn("name", "Nome", 200, true),
  generateColumn("email", "Email", 200, true),
  generateColumn("phone", "Celular", 200, true),
  generateColumn("status", "Status", 200, true),
  generateColumn("createdAt", "Criado Em", 200, true, valueGeeterCreatedAt),
];
