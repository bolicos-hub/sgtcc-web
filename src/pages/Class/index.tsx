import * as React from "react";
import { AxiosError } from "axios";
import * as MUI from "@mui/material";
import * as ICONS from "@mui/icons-material";

import Table from "@/components/Table";
import Tabs from "@/components/Tabs";

import { withAppBar } from "@/hocs/withAppBar";
import { BFF } from "@/services/bff";
import * as RES from "@/models/response";
import { generateError } from "@/helpers/Errors";

import * as C from "./constants";
import SemesterForm from "./Form/semester";
import ClassForm from "./Form/classes";

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

  const TAB_ITEMS = [
    {
      label: "SEMESTRES",
      child: <Table key={C.KEY} isLoading={isLoading} columns={C.S_COLUMNS} data={state.semesters} />,
    },
    {
      label: "TURMAS",
      child: <Table key={C.KEY} isLoading={isLoading} columns={C.C_COLUMNS} data={state.classes} />,
    },
  ];

  const TAB_NEW_ITEMS = [
    {
      label: "NOVO SEMESTRE",
      child: <SemesterForm />,
    },
    {
      label: "NOVA TURMA",
      child: <ClassForm />,
    },
  ];

  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));
  const handleNew = () => updateState("onNew", !state.onNew);
  const a11yButton = (id: string, aria: string, color: ButtonColor, icon: React.ReactNode) => ({
    id: `${id}`,
    "aria-labelledby": `${aria}`,
    color: color,
    startIcon: icon,
  });

  const buttonProps = state.onNew
    ? a11yButton(C.HTML_ID.BUTTON_BACK, C.HTML_LABELLEDBY.BUTTON_BACK, "error", <ICONS.ArrowBack />)
    : a11yButton(C.HTML_ID.BUTTON_ADD, C.HTML_LABELLEDBY.BUTTON_ADD, "success", <ICONS.Add />);

  return (
    <MUI.Container>
      <MUI.Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <MUI.Typography variant="h4" gutterBottom>
          {C.TITLE}
        </MUI.Typography>

        <MUI.Button sx={{ width: "25ch" }} variant="contained" onClick={handleNew} {...buttonProps}>
          {`${state.onNew ? C.BACK : C.NEW}`}
        </MUI.Button>
      </MUI.Stack>
      <MUI.Stack>{state.onNew ? <Tabs items={TAB_NEW_ITEMS} /> : <Tabs items={TAB_ITEMS} />}</MUI.Stack>
    </MUI.Container>
  );
};

type ButtonColor = "error" | "success" | "inherit" | "primary" | "secondary" | "info" | "warning" | undefined;
type Field = keyof State;
interface State {
  semesters: Array<RES.SemesterDTO>;
  classes: Array<RES.ClassDTO>;
  onNew: boolean;
}

export default withAppBar(Classes, "Turmas");
