import React from "react";
import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { ROUTES as R } from "@/constants";
import { AUTH } from "@/helpers/Auth";

// Utils PAGES
import HomePage from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import SignInPage from "@/pages/Auth/SignIn";
import SignUpPage from "@/pages/Auth/SignUp";
import NotFoundPage from "@/pages/NotFound";


const PrivateRoute = ({ component, ...rest }: any) => {
  const isAuthenticated = AUTH.IS_AUTHENTICATE();

  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Navigate to={{ pathname: R.HOME() }} state={{ from: props.location }} />
    );

  return <Route {...rest} render={routeComponent} />;
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={R.HOME()} element={<HomePage />} />
        <Route path={R.SIGNIN()} element={<SignInPage />} />
        <Route path={R.SIGNUP()} element={<SignUpPage />} />

        <Route path={R.DASHBOARD()} element={<Dashboard />} />

        <PrivateRoute path={R.PRIVATE()} component={Dashboard} />

        <Route path={R.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
