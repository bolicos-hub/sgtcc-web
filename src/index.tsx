import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import reportWebVitals from "@/reportWebVitals";
import Mirage from "@/services/mirage";
import Theme from "@/theme";
import Routes from "@/routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Routes />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

if ((process.env.NODE_ENV as string) === "mirage") Mirage();

reportWebVitals();
