import { Avatar, Badge, Button, List, Popover, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { removeCartItem } from "../../utils";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const navigator = useNavigate();
  const [popovervisible, setPopovervisible] = useState(false);

  useEffect(() => {
    const cartHistory = JSON.parse(localStorage.getItem("order"));
    if (!!cartHistory) {
      console.log(
        "🚀 ~ file: index.js:16 ~ useEffect ~ cartHistory:",
        cartHistory
      );
      setCartItems([...cartHistory]);
    }
  }, []);

  const handleCheckoutSubmit = () => {
    navigator("/cart");
    setPopovervisible(false);
  };

  const CartHolder = () => {
    console.log("🚀 ~ file: index.js:24 ~ CartHolder ~ cartItems:", cartItems);

    const handleRemoveCartItem = (item) => {
      console.log(
        "🚀 ~ file: index.js:23 ~ handleRemoveCartItem ~ cartItems:",
        cartItems
      );
      const newCartItems = removeCartItem(cartItems, item);
      console.log(
        "🚀 ~ file: index.js:23 ~ handleRemoveCartItem ~ newCartItems:",
        newCartItems
      );
      setCartItems(newCartItems);
    };

    return (
      <div className="cartHolder">
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          style={{
            width: "400px",
            maxWidth: "80vw",
            maxHeight: "50vh",
            overflowY: "auto",
          }}
          size="large"
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`${item.thumbnail}`} size={"small"} />}
                title={<a href="/">{item.title}</a>}
                description={
                  <Typography.Text type="danger">
                    {item.quantity} x {"$ "} {item.price}
                  </Typography.Text>
                }
              />
              <div
                className="removeCartItem"
                onClick={() => handleRemoveCartItem(item)}
              >
                ❌
              </div>
            </List.Item>
          )}
        />

        <Button
          type="primary"
          onClick={() => handleCheckoutSubmit()}
          className="checkOutBtn"
        >
          Checkout
        </Button>
      </div>
    );
  };

  const handlePopoverChange = (newOpen) => {
    setPopovervisible(newOpen);
  };

  return (
    <>
      <Popover
        placement="bottomRight"
        title={"Your Cart"}
        content={<CartHolder />}
        trigger="click"
        open={popovervisible}
        onOpenChange={handlePopoverChange}
      >
        <Badge count={cartItems.length || 0}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </Popover>
    </>
  );
};

export default ShoppingCart;
