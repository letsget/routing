import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

const MainRouter = () => (
  <Switch>
    {routes.map(({ authorized, path, ...props }) =>
      authorized ? (
        <PrivateRoute key={`id-${path}`} path={path} data={null} {...props} />
      ) : (
        <Route key={`id-${path}`} path={path} {...props} />
      )
    )}
  </Switch>
);

export default MainRouter;
