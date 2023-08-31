import { Badge, Button, Drawer, Space, Typography } from "antd";
import "./AuthHeader.scss";
import { Link } from "react-router-dom";
import {
  BellOutlined,
  CoffeeOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import AuthMenu from "../Menu/AuthMenu";

function AuthHeader() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="appHeader">
      <div>
        <Button
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          type="dashed"
          className="menuBtn"
        ></Button>

        <Drawer
          title="Toni Store"
          placement="left"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <AuthMenu />
        </Drawer>
      </div>
      <div className="appTitle">
        <Link to="/admin/dash-board">
          <Typography.Title>
            <CoffeeOutlined style={{ fontSize: "24px" }} /> IamAdmin
          </Typography.Title>
        </Link>
      </div>
      <div className="appNotif">
        <Space size="middle">
          <Badge count={5} className="appNotifStyle">
            <MailOutlined style={{ fontSize: "24px" }} />
          </Badge>
          <Badge count={15} className="appNotifStyle">
            <BellOutlined style={{ fontSize: "24px" }} />
          </Badge>
        </Space>
      </div>
    </div>
  );
}

export default AuthHeader;
