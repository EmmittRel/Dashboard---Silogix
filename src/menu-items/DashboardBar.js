import {
  DashboardOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  UserOutlined,
  TableOutlined,
  DashboardOutlined,
};

// Menu-Item For Dashboard

const dashboard = {
  id: "group-dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "Employee",
      title: "Employees",
      type: "item",
      url: "/employee",
      icon: icons.UserOutlined,
    },
  ],
};

export default dashboard;
