import * as React from "react";
import { AxiosError } from "axios";
import { GridColDef, GridNativeColTypes, GridValueGetterParams as GetterParams } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { withAppBar } from "@/hocs/withAppBar";
import { BFF } from "@/services/bff";
import { SemesterDTO } from "@/models/response/semester";
import { newDate } from "@/helpers/Dates";
import Table from "@/components/Table";
import { generateError } from "@/helpers/Errors";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface State {
  semesters: Array<SemesterDTO>;
  newModal: boolean;
}

type Field = keyof State;

const Classes: React.FC = () => {
  const DATE_TIME_TYPE_COL: GridNativeColTypes = "dateTime";
  const KEY = "classes-key-table";
  const TITLE = `Gerenciar Turmas`;
  const NEW_SEMESTER = `Novo Semestre`;

  const firstRender = React.useRef(true);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [state, setState] = React.useState<State>({
    semesters: [],
    newModal: false,
  });
  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));
  const handleNew = () => updateState("newModal", true);

  const fetchSemesters = React.useCallback(() => {
    setLoading(true);
    BFF.SEMESTER.LIST()
      .then((response) => updateState("semesters", response.data))
      .catch((exception: AxiosError) => generateError(exception))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchSemesters();
    }
  }, [fetchSemesters]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", sortable: true, width: 100 },
    { field: "name", headerName: "Nome", width: 200 },
    {
      field: "createdAt",
      headerName: "Criado Em",
      type: DATE_TIME_TYPE_COL,
      sortable: true,
      width: 200,
      valueGetter: (params: GetterParams) => {
        const date = params.row.createdAt;
        return newDate(date);
      },
    },
  ];

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          {TITLE}
        </Typography>
        <Button variant="contained" onClick={handleNew} startIcon={<AddIcon />}>
          {NEW_SEMESTER}
        </Button>
      </Stack>

      <Box sx={{ my: 8 }}>
        <Table key={KEY} isLoading={isLoading} columns={columns} data={state.semesters} />
      </Box>
    </Container>
  );
};

export default withAppBar(Classes);
