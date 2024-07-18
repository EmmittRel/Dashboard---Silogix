import { lazy } from "react";
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// Dashboard Pages
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));
const EmployeePage = Loadable(lazy(() => import("pages/EmployeePage")));

// Product Inventory Pages
const CategoryPage = Loadable(
  lazy(() => import("pages/ProductInventory/CategoryPage"))
);
const BrandPage = Loadable(
  lazy(() => import("pages/ProductInventory/BrandPage"))
);
const BlogCollection = Loadable(
  lazy(() => import("pages/ProductInventory/BlogCollection"))
);
const ContactPage = Loadable(
  lazy(() => import("pages/ProductInventory/ContactPage"))
);

// Quick Link Pages
const SettingPage = Loadable(lazy(() => import("pages/Support/Setting")));
const SupportPage = Loadable(lazy(() => import("pages/Support/Support")));

// Routing Pages
const MainRoutes = {
  path: "",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element: <DashboardDefault />,
    },
    {
      path: "employee",
      element: <EmployeePage />,
    },
    {
      path: "blogs",
      element: <BlogCollection />,
    },
    {
      path: "setting",
      element: <SettingPage />,
    },
    {
      path: "support",
      element: <SupportPage />,
    },
    {
      path: "category",
      element: <CategoryPage />,
    },
    {
      path: "brands",
      element: <BrandPage />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
  ],
};

export default MainRoutes;
