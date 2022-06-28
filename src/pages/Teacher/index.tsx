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
import StudentCreate from "./StudentCreate";

const Teachers: React.FC = () => {
  const firstRender = React.useRef(true);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [state, setState] = React.useState<State>(INITIAL_STATE);

  const fetchTeachers = React.useCallback(() => {
    setLoading(true);
    BFF.TEACHER.LIST()
      .then((response) => updateState("teachers", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchTeachers();
    }
  }, [fetchTeachers]);

  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));
  const handleDelete = () => console.log("DELETE");
  const generateTabItem = (label: string, child: React.ReactNode) => ({ label: label, child: child });
  const handleRefresh = () => fetchTeachers();
  const a11yButton = (id: string, aria: string, color: ButtonColorType, icon: React.ReactNode) => ({
    id: `${id}`,
    "aria-labelledby": `${aria}`,
    color: color,
    startIcon: icon,
    variant: "contained" as ButtonVariant,
    sx: { width: "25ch" },
  });

  const TAB_ITEMS = [
    generateTabItem(
      "PROFESSORES",
      <Table
        key={C.HTML.KEY.TEACHER_TABLE}
        isLoading={isLoading}
        columns={C.STUDENT_COLUMNS}
        data={state.teachers}
        getRowId={"registration"}
      />
    ),
    generateTabItem("NOVO", <StudentCreate />),
  ];

  return (
    <MUI.Container id={C.HTML.ID.CONTAINER}>
      <Loader open={isLoading} />
      <MUI.Stack id={C.HTML.ID.STACK_HEADER} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <MUI.Typography id={C.HTML.ID.TYPOGRAFY} variant="h4" gutterBottom>
          {C.TEXT.TITLE}
        </MUI.Typography>

        <MUI.Stack id={C.HTML.ID.STACK_BUTTONS} spacing={1}>
          {state.onTable && (
            <>
              <MUI.Button
                onClick={handleRefresh}
                {...a11yButton(C.HTML.ID.BUTTON_REFRESH, C.HTML.LABELLEDBY.BUTTON_REFRESH, "secondary", <ICONS.Refresh />)}>
                {C.TEXT.REFRESH}
              </MUI.Button>

              <MUI.Button
                onClick={handleDelete}
                {...a11yButton(C.HTML.ID.BUTTON_DELETE, C.HTML.LABELLEDBY.BUTTON_DELETE, "error", <ICONS.Delete />)}>
                {C.TEXT.DELETE}
              </MUI.Button>
            </>
          )}
        </MUI.Stack>
      </MUI.Stack>

      <MUI.Stack id={C.HTML.ID.STACK_TABLES}>
        <Tabs items={TAB_ITEMS} />
      </MUI.Stack>
    </MUI.Container>
  );
};

type ButtonVariant = "contained" | "text" | "outlined" | undefined;
type ButtonColorType = "error" | "success" | "inherit" | "primary" | "secondary" | "info" | "warning" | undefined;
type Field = keyof State;
interface State {
  teachers: Array<RES.TeacherDTO>;
  onTable: boolean;
}

const INITIAL_STATE: State = {
  teachers: [],
  onTable: true,
};

export default withAppBar(Teachers, "Professores");
