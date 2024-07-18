import {
  ShopOutlined,
  PhoneOutlined,
  ExportOutlined,
  CheckOutlined,
  LoadingOutlined,
  FilterOutlined,
} from "@ant-design/icons";

// Used Icon
const icons = {
  ShopOutlined,
  CheckOutlined,
  ExportOutlined,
  PhoneOutlined,
  LoadingOutlined,
  FilterOutlined,
};

// Product Inventory
const Inventory = {
  id: "inventory",
  title: "Content Management",
  type: "group",
  children: [
    {
      id: "category",
      title: "Category",
      type: "item",
      url: "/category",
      icon: icons.FilterOutlined,
    },
    {
      id: "brands",
      title: "Brands",
      type: "item",
      url: "/brands",
      icon: icons.ExportOutlined,
    },
    {
      id: "blogs",
      title: "Blog Collections",
      type: "item",
      url: "/blogs",
      icon: icons.ShopOutlined,
    },
    {
      id: "contact",
      title: "Contact Data",
      type: "item",
      url: "/contact",
      icon: icons.PhoneOutlined,
    },
  ],
};

export default Inventory;
