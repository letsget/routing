import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouteProps } from "../types/routes";

const PrivateRoute = ({ data, component: Component, ...rest }: RouteProps) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return data ? (
          <Component {...props} key={props.location.pathname} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
