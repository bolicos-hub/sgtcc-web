import * as React from "react";
import { AxiosError } from "axios";
import Container from "@mui/material/Container";
import { withAppBar } from "@/hocs/withAppBar";
import { BFF } from "@/services/bff";
import * as RES from "@/models/response";
import Table from "@/components/Table";
import { generateError } from "@/helpers/Errors";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tabs from "@/components/Tabs";
import * as C from "./constants";

interface State {
  semesters: Array<RES.SemesterDTO>;
  classes: Array<RES.ClassDTO>;
  onNew: boolean;
}

type Field = keyof State;

const Classes: React.FC = () => {
  const firstRender = React.useRef(true);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [state, setState] = React.useState<State>({
    semesters: [],
    classes: [],
    onNew: false,
  });
  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));
  const handleNew = () => updateState("onNew", !state.onNew);

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
      child: <div>FORM DE SEMESTRES</div>,
    },
    {
      label: "NOVA TURMA",
      child: <div>FORM DE TURMAS</div>,
    },
  ];

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          {C.TITLE}
        </Typography>

        {state.onNew ? (
          <Button variant="contained" onClick={handleNew} startIcon={<ArrowBackIcon />} color="error">
            {C.BACK}
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNew} startIcon={<AddIcon />} color="success">
            {C.NEW}
          </Button>
        )}
      </Stack>
      <Stack>{state.onNew ? <Tabs items={TAB_NEW_ITEMS} /> : <Tabs items={TAB_ITEMS} />}</Stack>
    </Container>
  );
};

export default withAppBar(Classes);
