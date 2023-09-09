import { Layout, theme, Breadcrumb } from "antd";
import { Outlet, useParams } from "react-router-dom";
import AppFooter from "../components/Footer";
import AppHeader from "../components/Header/AppHeader";
import { hashidsDecode, makeUpLabel } from "../utils";
import App from "../App";
import { getSingleProduct } from "../services";
import { useEffect, useState } from "react";
const { Header, Footer, Content } = Layout;

function DefaultLayout(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [breadCrumbs, setBreadCrumbs] = useState([]);

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
    display: "flex",
    flexDirection: "column",
    flex: 1,
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

  const params = useParams();
  const cid = params.categoryId;
  const pid = params.productId;

  useEffect(() => {
    if (!!cid) {
      setBreadCrumbs([
        { title: "Home", href: "/" },
        { title: makeUpLabel(cid), href: `/products/categories/${cid}` },
      ]);
    } else if (!!pid) {
      getSingleProduct(hashidsDecode(pid)).then((resp) => {
        setBreadCrumbs([
          { title: "Home", href: "/" },
          {
            title: makeUpLabel(resp.category),
            href: `/products/categories/${resp.categoryid}`,
          },
        ]);
      });
    }
  }, [cid, pid]);

  return (
    <App>
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
            items={breadCrumbs}
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
    </App>
  );
}

export default DefaultLayout;
