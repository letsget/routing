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
  path?: string;
  exact?: boolean;
  component: ComponentType;
  authorized?: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/about-page",
    component: AboutPage,
  },
  {
    path: "/card-page",
    component: CartPage,
    authorized: true,
  },
  {
    path: "/contacts-page",
    component: ContactsPage,
  },
  {
    path: "/home-page",
    component: HomePage,
  },
  {
    path: "/partners-page",
    component: PartnersPage,
  },
  {
    path: "/payment-page",
    component: PaymentPage,
    authorized: true,
  },
  {
    path: "/profile-page",
    component: ProfilePage,
    authorized: true,
  },
  {
    component: NotFoundPage,
  },
];
