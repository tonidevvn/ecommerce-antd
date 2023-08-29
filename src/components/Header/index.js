import { Badge, Button, Drawer, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./AppHeader.scss";
import { useEffect, useState } from "react";
import { getSingleCard } from "../../services";
import MainMenu from "../Menu";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCardItems] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getSingleCard(1).then((res) => setCardItems(res.products));
  }, []);

  const handleCheckoutSubmit = () => {
    setCartDrawerOpen(false);
    navigator("/cart");
  };

  return (
    <>
      <Badge count={cartItems.length} onClick={() => setCartDrawerOpen(true)}>
        <ShoppingCartOutlined className="shoppingCardIcon" />
      </Badge>

      <Drawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        title="Your Cart"
        contentWrapperStyle={{ width: "500px" }}
        className="cartDrawer"
      >
        <Button type="text" onClick={() => handleCheckoutSubmit()}>
          Checkout
        </Button>
      </Drawer>
    </>
  );
};

function AppHeader() {
  return (
    <div className="appHeader">
      <div className="menuHeader">
        <MainMenu />
      </div>
      <div className="appTitle">
        <Typography.Title>Toni Store 🛍</Typography.Title>
      </div>
      <div className="shoppingCart">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default AppHeader;
