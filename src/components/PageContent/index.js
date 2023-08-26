import Sider from "antd/es/layout/Sider";
import { Layout, theme } from "antd";
import "./PageContent.scss";
import Sidebar from "../Sidebar";

const { Content } = Layout;

function PageContent(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const siderStyle = {
    background: colorBgContainer,
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "auto",
    padding: "0 50px",
  };

  const { hasSider, children } = props;

  return (
    <div className="appBody">
      {hasSider && (
        <Sider style={siderStyle} width={200}>
          <Sidebar />
        </Sider>
      )}

      <Content style={contentStyle}>{children}</Content>
    </div>
  );
}

export default PageContent;
