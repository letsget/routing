import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

import { RouteProps } from "../types/routes";

const PrivateRoute: FC<RouteProps> = ({ authorized, ...props }) => {
  return authorized ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute;
