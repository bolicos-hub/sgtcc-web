import * as React from "react";
import { AxiosError } from "axios";
import * as MUI from "@mui/material";
import * as ICONS from "@mui/icons-material";

import Table from "@/components/Table";
import Tabs from "@/components/Tabs";
import Loader from "@/components/Loader";
import { generateError } from "@/helpers/Errors";
import { withAppBar } from "@/hocs/withAppBar";
import * as RES from "@/models/response";
import { BFF } from "@/services/bff";

import * as C from "./Constants";
import ClassCreate from "./ClassCreate";
import SemesterCreate from "./SemesterCreate";

const Classes: React.FC = () => {
  const firstRender = React.useRef(true);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [state, setState] = React.useState<State>({
    semesters: [],
    classes: [],
    onNew: false,
  });

  const fetchSemesters = React.useCallback(() => {
    setLoading(true);
    BFF.SEMESTER.LIST()
      .then((response) => updateState("semesters", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  const fetchClasses = React.useCallback(() => {
    setLoading(true);
    BFF.CLASS.LIST()
      .then((response) => updateState("classes", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchSemesters();
      fetchClasses();
    }
  }, [fetchSemesters, fetchClasses]);

  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));
  const handleNew = () => updateState("onNew", !state.onNew);
  const generateTabItem = (label: string, child: React.ReactNode) => ({ label: label, child: child });
  const handleRefresh = () => {
    fetchSemesters();
    fetchClasses();
  };
  const a11yButton = (id: string, aria: string, color: ButtonColorType, icon: React.ReactNode) => ({
    id: `${id}`,
    "aria-labelledby": `${aria}`,
    color: color,
    startIcon: icon,
    variant: "contained" as ButtonVariant,
    sx: { width: "25ch" },
  });

  const buttonProps = state.onNew
    ? a11yButton(C.HTML.ID.BUTTON_BACK, C.HTML.LABELLEDBY.BUTTON_BACK, "error", <ICONS.ArrowBack />)
    : a11yButton(C.HTML.ID.BUTTON_ADD, C.HTML.LABELLEDBY.BUTTON_ADD, "success", <ICONS.Add />);

  const TAB_NEW_ITEMS = [generateTabItem("NOVO SEMESTRE", <SemesterCreate />), generateTabItem("NOVA TURMA", <ClassCreate />)];
  const TAB_ITEMS = [
    generateTabItem("SEMESTRES", <Table key={C.HTML.KEY.SEMESTER_TABLE} isLoading={isLoading} columns={C.SEMESTER_COLUMNS} data={state.semesters} />),
    generateTabItem("TURMAS", <Table key={C.HTML.KEY.CLASS_TABLE} isLoading={isLoading} columns={C.CLASS_COLUMNS} data={state.classes} />),
  ];

  return (
    <MUI.Container id={C.HTML.ID.CONTAINER}>
      <Loader open={isLoading} />
      <MUI.Stack id={C.HTML.ID.STACK_HEADER} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <MUI.Typography id={C.HTML.ID.TYPOGRAFY} variant="h4" gutterBottom>
          {C.TEXT.TITLE}
        </MUI.Typography>

        <MUI.Stack id={C.HTML.ID.STACK_BUTTONS} spacing={1}>
          {!state.onNew && (
            <MUI.Button
              onClick={handleRefresh}
              {...a11yButton(C.HTML.ID.BUTTON_REFRESH, C.HTML.LABELLEDBY.BUTTON_REFRESH, "secondary", <ICONS.Refresh />)}>
              {C.TEXT.REFRESH}
            </MUI.Button>
          )}
          <MUI.Button onClick={handleNew} {...buttonProps}>
            {state.onNew ? C.TEXT.BACK : C.TEXT.NEW}
          </MUI.Button>
        </MUI.Stack>
      </MUI.Stack>

      <MUI.Stack id={C.HTML.ID.STACK_TABLES}>
        <Tabs items={state.onNew ? TAB_NEW_ITEMS : TAB_ITEMS} />
      </MUI.Stack>
    </MUI.Container>
  );
};

type ButtonVariant = "contained" | "text" | "outlined" | undefined;
type ButtonColorType = "error" | "success" | "inherit" | "primary" | "secondary" | "info" | "warning" | undefined;
type Field = keyof State;
interface State {
  semesters: Array<RES.SemesterDTO>;
  classes: Array<RES.ClassDTO>;
  onNew: boolean;
}

export default withAppBar(Classes, "Turmas");
