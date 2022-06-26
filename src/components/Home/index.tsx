import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Copyright from "@/components/Copyright";
import AppBar from "@/components/AppBar";
import Drawer from "@/components/Drawer";

interface Props {
  children?: React.ReactNode;
  name: string;
}

const Home: React.FC<Props> = ({ children, name, ..._props }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar toggleDrawer={toggleDrawer} open={open} name={name} />
      <Drawer toggleDrawer={toggleDrawer} open={open} navigate={navigate} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}>
        <Toolbar />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
          <Copyright />
        </Container>
      </Box>
    </>
  );
};

export default Home;
