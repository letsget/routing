import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouteProps } from "../types/routes";

const NotLoggedRoute = ({
  data,
  component: Component,
  ...rest
}: RouteProps) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return data ? (
          <Redirect
            to={{
              pathname: "/profile-page",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} key={props.location.pathname} />
        );
      }}
    />
  );
};

export default NotLoggedRoute;
