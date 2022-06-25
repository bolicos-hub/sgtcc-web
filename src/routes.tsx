import * as React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { MUI_ROUTES as R } from "@/constants";

// Utils PAGES
import Dashboard from "@/pages/Dashboard";
import SignInPage from "@/pages/Auth/SignIn";
import SignUpPage from "@/pages/Auth/SignUp";
import NotFoundPage from "@/pages/NotFound";

import Boards from "@/pages/Board";
import Classes from "@/pages/Class";
import Proposals from "@/pages/Proposal";
import Reports from "@/pages/Report";
import Students from "@/pages/Student";
import Teachers from "@/pages/Teacher";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={R.HOME()} element={<Dashboard />} />
        <Route path={R.SIGNIN()} element={<SignInPage />} />
        <Route path={R.SIGNUP()} element={<SignUpPage />} />

        <Route path={R.BOARDS()} element={<Boards />} />
        <Route path={R.CLASSES()} element={<Classes />} />
        <Route path={R.PROPOSALS()} element={<Proposals />} />
        <Route path={R.REPORTS()} element={<Reports />} />
        <Route path={R.STUDENTS()} element={<Students />} />
        <Route path={R.TEACHERS()} element={<Teachers />} />

        <Route path={R.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
