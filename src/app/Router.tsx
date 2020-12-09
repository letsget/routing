import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

const MainRouter = () => (
  <Switch>
    {routes.map(({ authorized, path, ...props }) =>
      authorized ? (
        <PrivateRoute
          {...props}
          key={`id-${path}`}
          path={path}
          authorized={authorized}
        />
      ) : (
        <Route {...props} key={`id-${path}`} path={path} />
      )
    )}
  </Switch>
);

export default MainRouter;
