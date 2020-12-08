import { ReactNode } from "react";

import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PartnersPage from "../pages/PartnersPage";
import PaymentPage from "../pages/PaymentPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

enum RouteType {
  authorized = "authorized",
  private = "private",
  regular = "regular",
}

interface Route {
  type: RouteType;
  path?: string;
  exact?: boolean;
  component: ReactNode;
}

export const routes: Route[] = [
  {
    type: RouteType.authorized,
    path: "/",
    exact: true,
    component: LoginPage,
  },
  {
    type: RouteType.regular,
    path: "/about-page",
    component: AboutPage,
  },
  {
    type: RouteType.private,
    path: "/card-page",
    component: CartPage,
  },
  {
    type: RouteType.regular,
    path: "/contacts-page",
    component: ContactsPage,
  },
  {
    type: RouteType.authorized,
    path: "/home-page",
    component: HomePage,
  },
  {
    type: RouteType.regular,
    path: "/partners-page",
    component: PartnersPage,
  },
  {
    type: RouteType.private,
    path: "/payment-page",
    component: PaymentPage,
  },
  {
    type: RouteType.private,
    path: "/profile-page",
    component: ProfilePage,
  },
  {
    type: RouteType.regular,
    component: NotFoundPage,
  },
];
