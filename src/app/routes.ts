import { ComponentType } from "react";

import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PartnersPage from "../pages/PartnersPage";
import PaymentPage from "../pages/PaymentPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

interface Route {
  path: string;
  exact: boolean;
  component: ComponentType;
  authorized: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
    authorized: false,
  },
  {
    path: "/about-page",
    exact: false,
    component: AboutPage,
    authorized: false,
  },
  {
    path: "/card-page",
    exact: false,
    component: CartPage,
    authorized: true,
  },
  {
    path: "/contacts-page",
    exact: false,
    component: ContactsPage,
    authorized: false,
  },
  {
    path: "/home-page",
    exact: false,
    component: HomePage,
    authorized: false,
  },
  {
    path: "/partners-page",
    exact: false,
    component: PartnersPage,
    authorized: false,
  },
  {
    path: "/payment-page",
    exact: false,
    component: PaymentPage,
    authorized: true,
  },
  {
    path: "/profile-page",
    exact: false,
    component: ProfilePage,
    authorized: true,
  },
  {
    path: "*",
    exact: false,
    component: NotFoundPage,
    authorized: false,
  },
];
