import React, { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  component: ComponentType;
  path: string;
  exact: boolean;
  data: null | {};
}

const PrivateRoute: ComponentType<PrivateRouteProps> = ({
  component,
  data,
  exact,
  path,
}) => {
  return data ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
