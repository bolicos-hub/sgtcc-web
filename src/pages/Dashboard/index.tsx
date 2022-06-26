import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { withAppBar } from "@/hocs/withAppBar";

interface Props {
  children?: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ ..._props }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}>
              {/* <Chart /> */}
              {"CHART"}
            </Paper>
          </Grid>

          {/* Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}>
              {/* <Deposits /> */}
              {"CHART"}
            </Paper>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              {/* <Orders /> */}
              {"CHART"}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default withAppBar(Dashboard);
