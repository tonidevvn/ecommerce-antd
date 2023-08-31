import Sider from "antd/es/layout/Sider";
import { Layout, theme } from "antd";
import "./PageContent.scss";
import Sidebar from "../Sidebar/MainSider";

const { Content } = Layout;

function PageContent(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const siderStyle = {
    background: colorBgContainer,
  };

  const contentStyle = {
    lineHeight: "auto",
    padding: "0 20px",
    witdth: "100%",
    maxWidth: "100%",
  };

  const { hasSider, children } = props;

  return (
    <div className="appBody">
      {hasSider && (
        <Sider
          style={siderStyle}
          width={200}
          breakpoint={"lg"}
          collapsedWidth={0}
          trigger={null}
        >
          <Sidebar />
        </Sider>
      )}

      <Content style={contentStyle}>{children}</Content>
    </div>
  );
}

export default PageContent;
