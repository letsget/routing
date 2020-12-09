import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  component: FC;
  path: string;
  exact?: boolean;
  data: null | {};
}

const PrivateRoute: FC<Props> = ({ data, ...props }) => {
  return data ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute;
