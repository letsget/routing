import React from "react";
import { Route, Switch } from "react-router-dom";

import NotLoggedRoute from "./NotLoggedRoute";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";
import { RouteMapping } from "../types/routes";

const mapping: RouteMapping = {
  authorized: NotLoggedRoute,
  private: PrivateRoute,
  regular: Route,
};

const MainRouter = () => {
  return (
    <Switch>
      {routes.map(({ type, exact, path, component }) => {
        const CurrentRoute = mapping[type]; // camelCase or not?
        return (
          <CurrentRoute
            key={`id-${path}`}
            path={path}
            exact={exact}
            component={component}
            data={null} // null - not auth; {} - loggedInUser
          />
        );
      })}
    </Switch>
  );
};

export default MainRouter;
