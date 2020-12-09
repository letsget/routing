import { ComponentType } from "react";
import { RouteProps } from "react-router-dom";

export interface PrivateRouteProps extends RouteProps {
  data: null | {};
  component: ComponentType;
}
