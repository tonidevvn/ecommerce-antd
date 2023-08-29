import { Layout, Breadcrumb, theme } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

function LayoutWithSidebar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    overflow: "hidden",
    textAlign: "center",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    background: colorBgContainer,
    boxShadow: "1px 4px 4px #00000033",
    position: "fixed" /* Set the navbar to fixed position */,
    top: 0 /* Position the navbar at the top of the page */,
    width: "100%" /* Full width */,
    zIndex: 1,
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
    <div className="App">
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
          >
            <Sider style={siderStyle} width={200}>
              Sider
            </Sider>
            <Content style={contentStyle}>
              <Outlet />
            </Content>
          </Layout>
        </Content>
        <Footer style={footerStyle}>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default LayoutWithSidebar;
