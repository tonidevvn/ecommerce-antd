import { Layout, theme, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
const { Header, Footer, Content } = Layout;

function DefaultLayout(props) {
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
    padding: "60px 50px 0px",
  };

  const footerStyle = {
    textAlign: "center",
    height: "60px",
    color: "azure",
    backgroundColor: "black",
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
              padding: "0px 15px",
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

        <Footer style={footerStyle}>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default DefaultLayout;
