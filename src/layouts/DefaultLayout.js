import { Space, Layout, theme, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/Header";
const { Header, Footer, Content } = Layout;

function DefaultLayout(props) {
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
  const footerStyle = {
    textAlign: "center",
  };

  return (
    <div className="App">
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
            >
              <Outlet />
              {props.children}
            </Layout>
          </Content>

          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default DefaultLayout;
