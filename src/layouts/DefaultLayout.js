import { Space, Layout, theme } from "antd";
const { Header, Footer, Content } = Layout;

function DefaultLayout() {
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
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>App Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}

export default DefaultLayout;
