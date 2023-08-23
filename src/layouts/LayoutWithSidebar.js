import { Space, Layout, Breadcrumb, theme } from "antd";
import AppHeader from "../components/Header";
const { Header, Footer, Sider, Content } = Layout;

function LayoutWithSidebar({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    textAlign: "center",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    background: colorBgContainer,
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "auto",
    padding: "0 50px",
  };
  const siderStyle = {
    background: colorBgContainer,
  };
  const footerStyle = {
    textAlign: "center",
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <AppHeader />
        </Header>
        <Content style={contentStyle}>
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
            items={[{ title: "Home", href: "/" }]}
          ></Breadcrumb>
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
            }}
            hasSider
          >
            <Sider style={siderStyle} width={200}>
              Sider
            </Sider>
            <Content style={contentStyle}>{children}</Content>
          </Layout>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}

export default LayoutWithSidebar;
