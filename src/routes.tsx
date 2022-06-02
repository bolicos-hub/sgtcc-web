import React from "react";
import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { ROUTES } from "@/constants";
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
      <Navigate to={{ pathname: ROUTES.HOME() }} state={{ from: props.location }} />
    );

  return <Route {...rest} render={routeComponent} />;
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME()} element={<HomePage />} />
        <Route path={ROUTES.SIGNIN()} element={<SignInPage />} />
        <Route path={ROUTES.SIGNUP()} element={<SignUpPage />} />

        <Route path={ROUTES.DASHBOARD()} element={<Dashboard />} />

        <PrivateRoute path={ROUTES.PRIVATE()} component={Dashboard} />

        <Route path={ROUTES.NOT_FOUND()} element={<NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
