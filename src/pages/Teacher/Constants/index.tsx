import { newDate } from "@/helpers/Dates";
import { GridColDef, GridNativeColTypes, GridValueGetterParams as GetParams } from "@mui/x-data-grid";

export const DATE_TIME_TYPE_COL: GridNativeColTypes = "dateTime";
export const TEXT = {
  TITLE: "Gerenciar Professores",
  DELETE: "Excluir",
  REFRESH: "Atualizar",
};

export const HTML = {
  ID: {
    CONTAINER: "teachers-conatiner",
    STACK_HEADER: "teachers-tack-header",
    STACK_TABLES: "teachers-tack-tables",
    STACK_BUTTONS: "teachers-tack-buttons",
    TYPOGRAFY: "teachers-title",

    BUTTON_DELETE: "teachers-button-delete",
    BUTTON_REFRESH: "teachers-button-refesh",
  },
  KEY: {
    TEACHER_TABLE: "teachers-key-table",
  },
  LABELLEDBY: {
    BUTTON_DELETE: "teachers-button-delete",
    BUTTON_REFRESH: "teachers-button-refesh",
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
  generateColumn("lattes", "Lattes", 200, true),
  generateColumn("createdAt", "Criado Em", 200, true, valueGeeterCreatedAt),
];
