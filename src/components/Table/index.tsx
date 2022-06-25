import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Loader from "@/components/Loader";

interface Props {
  children?: React.ReactNode;
  isLoading: boolean;

  data: Array<any>;
  columns: GridColDef[];
  messageNoRows?: string;
  messageNoResults?: string;
}

interface State {
  size: number;
  rowsPerPage: Array<number>;
}

type Field = keyof State;

const Table: React.FC<Props> = ({
  isLoading,
  data,
  columns,
  messageNoRows = "Nada para mostrar",
  messageNoResults = "Nenhum Resultado foi encontrado",
}) => {
  const ROWS_PER_PAGE = [5, 10, 20];
  const SIZE = 5;

  const [state, setState] = React.useState<State>({
    size: SIZE,
    rowsPerPage: ROWS_PER_PAGE,
  });
  const updateState = <F extends Field>(field: F, value: any) => setState((prev) => ({ ...prev, [field]: value }));

  return (
    <Container>
      <Box>
        <DataGrid
          rows={data}
          columns={columns || []}
          pageSize={state.size}
          rowsPerPageOptions={state.rowsPerPage}
          onPageSizeChange={(pageSize) => {
            updateState("size", pageSize);
          }}
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

export default Table;
