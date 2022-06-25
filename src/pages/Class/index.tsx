import * as React from "react";
import { AxiosError } from "axios";
import { DataGrid, GridColDef, GridNativeColTypes } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { withAppBar } from "@/hocs/withAppBar";
import { BFF } from "@/services/bff";
import { SemesterDTO } from "@/models/response/semester";
import { Stack } from "@mui/material";
import Loader from "@/components/Loader";

interface State {
  semesters: Array<SemesterDTO>;
  size: number;
  rowsPerPage: Array<number>;
}

const Classes: React.FC = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [state, setState] = React.useState<State>({
    semesters: [],
    size: 10,
    rowsPerPage: [5, 10, 20],
  });

  const createdAtType: GridNativeColTypes = "dateTime";
  const messageNoRows = "Nenhuma linha";
  const messageNoResults = "Nenhum Resultado foi encontrado";

  const fetchSemesters = React.useCallback(() => {
    setLoading(true);
    BFF.SEMESTER.LIST()
      .then((response) => {
        setState((prev) => ({
          ...prev,
          semesters: response.data,
        }));
      })
      .catch((exception: AxiosError) => {
        console.error("ERROR: FETCH SEMESTERS");
        console.warn(`MESSAGE => ${exception.message}`);
        console.warn(`CAUSE => ${exception.cause}`);
        console.warn(`STATUS => ${exception.status}`);
      })
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetchSemesters();
  }, [fetchSemesters]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", sortable: true, width: 100 },
    { field: "name", headerName: "Nome", width: 150 },
    {
      field: "createdAt",
      headerName: "Criado Em",
      type: createdAtType,
      sortable: true,
      width: 150,
    },
  ];

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <DataGrid
          rows={state.semesters}
          columns={columns}
          pageSize={state.size}
          rowsPerPageOptions={state.rowsPerPage}
          checkboxSelection={true}
          autoHeight={true}
          components={{
            NoRowsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                {messageNoRows}
              </Stack>
            ),
            NoResultsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                {messageNoResults}
              </Stack>
            ),
            LoadingOverlay: () => <Loader open={isLoading} />,
          }}
        />
      </Box>
    </Container>
  );
};

export default withAppBar(Classes);
