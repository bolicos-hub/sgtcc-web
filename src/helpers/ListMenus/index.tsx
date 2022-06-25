import * as React from "react";
import { NavigateFunction } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { MUI_ROUTES as R } from "@/constants";

const MENU_ITEMS = {
  DASHBOARD: {
    text: "Dashboard",
    icon: <DashboardIcon />,
    route: R.HOME(),
  },
  STUDENTS: {
    text: "Alunos",
    icon: <PeopleIcon />,
    route: R.STUDENTS(),
  },
  TEACHERS: {
    text: "Professores",
    icon: <DashboardIcon />,
    route: R.TEACHERS(),
  },
  BOARDS: {
    text: "Bancas",
    icon: <ShoppingCartIcon />,
    route: R.BOARDS(),
  },
  CLASSES: {
    text: "Turmas",
    icon: <LayersIcon />,
    route: R.CLASSES(),
  },
  REPORTS: {
    text: "Relatórios",
    icon: <BarChartIcon />,
    route: R.REPORTS(),
  },
};

interface Props {
  children?: React.ReactNode;
  navigate: NavigateFunction;
}

export const MainListItems: React.FC<Props> = ({ navigate, ..._props }) => (
  <React.Fragment>
    {Object.values(MENU_ITEMS).map((item) => (
      <ListItemButton key={item.route} onClick={() => navigate(item.route)}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </React.Fragment>
);

const MENU_SECONDARY = {
  tile: "Relatórios Salvos",
};
const MENU_SECONDARY_ITEMS = {
  BY_CLASS: {
    text: "Por Turma",
  },
  BY_SEMESTER: {
    text: "Por Semestre",
  },
  REPPROED: {
    text: "Reprovados",
  },
};
export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      {MENU_SECONDARY.tile}
    </ListSubheader>

    {Object.values(MENU_SECONDARY_ITEMS).map((item) => (
      <ListItemButton key={item.text} onClick={() => console.log(`VOCE CLICOU NO => ${item.text}`)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
