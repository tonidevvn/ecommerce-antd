import { Layout, theme } from "antd";
import AppFooter from "../components/Footer";
import { Outlet } from "react-router-dom";
import AuthHeader from "../components/Header/AuthHeader";
import AuthSider from "../components/Sidebar/AuthSider";
import App from "../App";
const { Header, Footer, Content } = Layout;

function AuthLayout(props) {
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
    width: "100%" /* Full width */,
  };

  const bodyStyle = {
    display: "flex",
    flex: 1,
    lineHeight: "auto",
    margin: "20px 0",
  };

  const contentStyle = {
    lineHeight: "auto",
    padding: "20px",
    margin: "10px",
    background: colorBgContainer,
  };

  const footerStyle = {
    textAlign: "center",
    height: "60px",
    color: "azure",
    backgroundColor: "black",
  };

  return (
    <App>
      <Header style={headerStyle}>
        <AuthHeader />
      </Header>
      <Content style={bodyStyle}>
        <Layout>
          <AuthSider />
          <Content style={contentStyle}>
            <Outlet />
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer style={footerStyle}>
        <AppFooter />
      </Footer>
    </App>
  );
}

export default AuthLayout;
