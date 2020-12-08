import { RouteComponentProps } from "react-router-dom";

export interface PrivateRouteProps extends RouteComponentProps {
  data: null | {};
}
