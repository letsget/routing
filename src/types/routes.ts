import { FC } from "react";

export interface RouteProps {
  path: string;
  exact?: boolean;
  component: FC;
  layout?: FC;
  authorized?: boolean;
}
