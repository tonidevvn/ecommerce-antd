import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import AuthMenu from "../Menu/AuthMenu";

function AuthSider() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        background: colorBgContainer,
      }}
      breakpoint={"lg"}
      className="authSider"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <AuthMenu />
    </Sider>
  );
}

export default AuthSider;
