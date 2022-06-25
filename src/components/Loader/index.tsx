import { Backdrop, CircularProgress } from "@mui/material";
import * as React from "react";

interface Props {
  children?: React.ReactNode;
  open: boolean;
}

const Loader: React.FC<Props> = ({ open }) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
