import { Badge, Button, Popover, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./AppHeader.scss";
import { useEffect, useState } from "react";
import { getSingleCard } from "../../services";
import MainMenu from "../Menu";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [cartItems, setCardItems] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getSingleCard(1).then((res) => setCardItems(res.products));
  }, []);

  const handleCheckoutSubmit = () => {
    navigator("/cart");
  };

  const CartHolder = () => {
    console.log(cartItems);
    return (
      <Button type="text" onClick={() => handleCheckoutSubmit()}>
        Checkout
      </Button>
    );
  };

  return (
    <>
      <Popover
        placement="bottom"
        title={"Your Cart"}
        content={<CartHolder />}
        trigger="click"
      >
        <Badge count={cartItems.length}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </Popover>
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
        <Link to="/">
          <Typography.Title>Toni Store 🛍</Typography.Title>
        </Link>
      </div>
      <div className="shoppingCart">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default AppHeader;
