import { ReactNode } from "react";
import { RouteProps } from "../../types/routes";

export const routes: RouteProps[] = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/",
    component: Main,
    exact: true,
    layout: AppLayout,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  //СПРАВОЧНИКИ
  {
    path: "/book/contractors",
    component: Contractors,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/drivers",
    component: Drivers,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/vehicles",
    component: Vehicles,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/addressbook",
    component: AddressBook,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/macroregions",
    component: Macroregions,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/packingbook",
    component: PackingBook,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/cargotypes",
    component: CargoTypesBook,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/book/routes",
    component: Routes,
    layout: AppLayout,
    authorized: true,
  },
  //ОПЕРАЦИИ
  {
    path: "/operation/closeSalesPoint",
    component: CloseSalesPoint,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/profileoperation/closeSalesPoint/newClose",
    component: CloseSalesPointNewClose,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/operation/closeSalesPoint/addDeliveryData",
    component: CloseSalesPointAddDeliveryData,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/operation/closeSalesPoint/editDeliveryData/:dataid",
    component: CloseSalesPointAddDeliveryData,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  //Грузоместо (ГМ)
  {
    path: "/packages/",
    component: PackageList,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/add",
    component: PackageAdd,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/addlist",
    component: PackageAddList,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },

  {
    path: "/packages/edit2",
    component: Package,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/edit/:packageid",
    component: PackageAdd,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/addfromxlsx",
    component: PackageAddFromXlsx,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/consolidate",
    component: ConsolidatedPackage,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/consolidate2",
    component: ConsolidatedPackage2,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/consolidatedlist",
    component: ConsolidatedPackageList,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/partialpackages/",
    component: PackagePartialList,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  //Документ основания перемещения груза
  {
    path: "packages/cargodocumentlist",
    component: CargoDocumentList,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/cargodocumentdetail:docid",
    component: CargoDocumentDetail,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  {
    path: "/packages/cargodocumentnew",
    component: CargoDocumentNew,
    exact: true,
    layout: AppLayout,
    authorized: true,
  },
  //Администрирование
  {
    path: "/administration/users",
    component: Users,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },
  {
    path: "/administration/adduser",
    component: AddUser,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },
  {
    path: "/administration/edituser/:userid",
    component: AddUser,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },
  {
    path: "/administration/resetpwd/:userid",
    component: ResetPwd,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },
  {
    path: "/administration/roles",
    component: Roles,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },
  {
    path: "/administration/rolesdescription",
    component: RolesDescription,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },
  {
    path: "/administration/testpage",
    component: TestPage,
    exact: true,
    layout: AdminAppLayout,
    authorized: true,
  },

  // страницы о запрете доступа
  {
    path: "/noaccess",
    component: NoAccess,
    exact: true,
  },
  {
    path: "/*",
    component: TestPage,
  },
];
