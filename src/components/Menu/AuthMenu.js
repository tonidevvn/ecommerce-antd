import {
  AppstoreOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context";

const AuthMenu = () => {
  const [current, setCurrent] = useState("home");
  const { setUser } = useContext(AppContext);

  const sibebarMenu = [
    {
      label: <NavLink to="dash-board">Dashboard</NavLink>,
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: <NavLink to="inventory">Inventory</NavLink>,
      key: "inventory",
      icon: <AppstoreOutlined />,
    },
    {
      label: <NavLink to="orders">Orders</NavLink>,
      key: "orders",
      icon: <ShoppingCartOutlined />,
    },
    {
      label: <NavLink to="customers">Customers</NavLink>,
      key: "customers",
      icon: <UserOutlined />,
    },
    {
      label: <NavLink to="#logout">Log out</NavLink>,
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (e.key === "logout") {
      setTimeout(() => {
        setUser(null);
      }, 1000);
    }
    // navigator(`/${e.key}`);
  };

  return (
    <Menu
      mode="vertical"
      items={sibebarMenu}
      selectedKeys={[current]}
      theme="light"
      onClick={onClick}
      style={{ textAlign: "left" }}
    />
  );
};

export default AuthMenu;
