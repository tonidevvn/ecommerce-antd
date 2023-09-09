import {
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Table,
  Typography,
  message,
} from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import ShoppingImg from "../../assets/images/shopping.svg";
import { clearCart, removeCartItem, updateCart } from "../../utils";
import { DeleteOutlined } from "@ant-design/icons";

const CheckoutCartBtn = ({ onFinish }) => {
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const onConfirmOrder = (data) => {
    console.log("🚀 ~ file: index.js:216 ~ onConfirmOrder ~ data:", data);
    setCheckoutDrawerOpen(false);
    onFinish();
  };

  return (
    <>
      <Button
        type="primary"
        className="checkoutBtn"
        onClick={() => {
          setCheckoutDrawerOpen(true);
        }}
      >
        Checkout your cart
      </Button>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => setCheckoutDrawerOpen(false)}
        title="Checkout Your Cart"
        contentWrapperStyle={{ width: "500px" }}
      >
        <Form
          onFinish={onConfirmOrder}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
        >
          <Form.Item
            label="Full name"
            name="full_name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Enter your full name..." />
          </Form.Item>
          <Form.Item
            label="Email"
            name="your_email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter your email..." />
          </Form.Item>
          <Form.Item
            label="Address"
            name="your_address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input placeholder="Enter your address..." />
          </Form.Item>
          <Form.Item name="cod" valuePropName="checked" noStyle>
            <Checkbox defaultChecked={true}>Cash On Delivery 💸</Checkbox>
          </Form.Item>

          <Typography.Paragraph type="secondary">
            More payment methods will be updated soon...
          </Typography.Paragraph>
          <Button type="primary" htmlType="submit">
            Confirm Order
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

function Cart() {
  const navigator = useNavigate();

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleCheckoutSubmit = () => {
    message.success("Your order has been placed successfully.");
    setCartItems([]);
    clearCart();
    navigator("/thank-you");
  };

  const handleRemoveCartItem = (item) => {
    const newCartItems = removeCartItem(cartItems, item);
    setCartItems(newCartItems);
  };

  const getCartSummary = () => {
    const data = cartItems;
    const total = data.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);

    const discountPrice = data.reduce((prev, curr) => {
      return prev + curr.discountedPrice;
    }, 0);

    const totalQty = data.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    return (
      <>
        <div className="cartSummary">
          Discounted amount: ${parseFloat(total - discountPrice).toFixed(0)}
        </div>
        <div className="cartSummary">
          Total amount ({totalQty} items): $
          {parseFloat(discountPrice).toFixed(0)}{" "}
          <Typography.Text delete type="danger">
            ${parseFloat(total).toFixed(0)}
          </Typography.Text>
        </div>
      </>
    );
  };

  return (
    <>
      {!!cartItems && cartItems.length > 0 ? (
        <>
          <h2>🥰 Just a minute to finish your checkout.</h2>
          <div className="checkoutForm">
            <Table
              dataSource={cartItems}
              pagination={false}
              scroll={{ x: 860 }}
              rowKey={(data) => data.id}
              columns={[
                {
                  title: "Action",
                  key: "action",
                  fixed: "left",
                  width: 80,
                  render: (_, record) => (
                    <a
                      href="#delete"
                      onClick={() => handleRemoveCartItem(record)}
                    >
                      <DeleteOutlined style={{ color: "red" }} />
                    </a>
                  ),
                },
                {
                  title: "Title",
                  dataIndex: "title",
                },
                {
                  title: "Quantity",
                  dataIndex: "quantity",
                  width: 120,
                  render: (value, record) => {
                    return (
                      <InputNumber
                        defaultValue={value}
                        min={0}
                        style={{ width: "65px" }}
                        onChange={(value) => {
                          console.log(
                            "🚀 ~ file: index.js:160 ~ ShoppingCart ~ record:",
                            record
                          );
                          console.log(
                            "🚀 ~ file: index.js:160 ~ ShoppingCart ~ value:",
                            value
                          );

                          const newCartItems = cartItems.map((item) => {
                            return item.id === record.id
                              ? {
                                  ...item,
                                  quantity: value,
                                  total: item.price * value,
                                  discountedPrice:
                                    (item.price *
                                      value *
                                      (100 - item.discountPercentage)) /
                                    100,
                                }
                              : item;
                          });
                          setCartItems(newCartItems);
                          updateCart(newCartItems);
                        }}
                      />
                    );
                  },
                },
                {
                  title: "Price",
                  dataIndex: "price",
                  width: 220,
                  render: (value, record) => {
                    return `$${value}`;
                  },
                },
                {
                  title: "Total",
                  dataIndex: "total",
                  width: 220,
                  render: (value, record) => {
                    return `$${value}`;
                  },
                },
              ]}
            />
            <Typography.Paragraph>{getCartSummary()}</Typography.Paragraph>
            <CheckoutCartBtn onFinish={() => handleCheckoutSubmit()} />
          </div>
        </>
      ) : (
        <>
          <h2>
            👋 Your shopping cart is empty. How about adding some items to it?{" "}
            <br /> Return <Link to="/"> home page</Link>.
          </h2>
          <img
            src={ShoppingImg}
            alt="Shopping with us"
            style={{ width: "280px", maxWidth: "80%" }}
          />
        </>
      )}
    </>
  );
}

export default Cart;
