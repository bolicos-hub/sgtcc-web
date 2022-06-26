import * as React from "react";
import * as RES from "@/models/response";
import { Box, Paper } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

interface Values {
  semester: RES.SemesterDTO;
  class: RES.ClassDTO;
}

const ClassForm: React.FC<Props> = () => {
  return (
    <Box>
      <Paper>
        
      </Paper>
    </Box>
  );
};

export default ClassForm;
