import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

const MainRouter = () => (
  <Switch>
    {routes.map(({ path, exact, component, authorized }) =>
      authorized ? (
        <PrivateRoute
          key={`id-${path}`}
          path={path}
          component={component}
          exact={exact}
          data={null}
        />
      ) : (
        <Route
          key={`id-${path}`}
          path={path}
          exact={exact}
          component={component}
        />
      )
    )}
  </Switch>
);

export default MainRouter;
