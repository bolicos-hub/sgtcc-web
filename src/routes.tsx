import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ROUTES as R } from "@/constants";

// Utils PAGES
import HomePage from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import SignInPage from "@/pages/Auth/SignIn";
import SignUpPage from "@/pages/Auth/SignUp";
import NotFoundPage from "@/pages/NotFound";


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={R.HOME()} element={<HomePage />} />
        <Route path={R.SIGNIN()} element={<SignInPage />} />
        <Route path={R.SIGNUP()} element={<SignUpPage />} />
        <Route path={R.DASHBOARD()} element={<Dashboard />} />
        <Route path={R.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
