import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { withAppBar } from "@/hocs/withAppBar";

const Boards: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          BOARDS
        </Typography>
      </Box>
    </Container>
  );
};

export default withAppBar(Boards);