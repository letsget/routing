import { ReactNode } from "react";

export interface RouteProps {
  data: null | {};
  component: ReactNode;
}

export interface RouteMapping {
  authorized: ReactNode;
  private: ReactNode;
  regular: ReactNode;
}
