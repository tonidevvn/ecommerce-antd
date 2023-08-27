import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Menu,
  Table,
  Typography,
  message,
} from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./AppHeader.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getSingleCard } from "../../API";

const menuItems = [
  {
    label: (
      <NavLink to="/">
        <HomeOutlined />
      </NavLink>
    ),
    key: "home",
  },
  {
    label: <NavLink to="products/categories/smartphones">Smartphones</NavLink>,
    key: "smartphones",
  },
  {
    label: <NavLink to="products/categories/laptops">Laptops</NavLink>,
    key: "laptops",
  },
  {
    label: "Men Accessories",
    key: "menAccessories",
    children: [
      {
        label: <NavLink to="products/categories/mens-shirts">Shirts</NavLink>,
        key: "menShirts",
      },
      {
        label: <NavLink to="products/categories/mens-shoes">Shoes</NavLink>,
        key: "menShoes",
      },
      {
        label: <NavLink to="products/categories/mens-watches">Watches</NavLink>,
        key: "menWatches",
      },
    ],
  },
  {
    label: "Women Accessories",
    key: "womenAccessories",
    children: [
      {
        label: (
          <NavLink to="products/categories/womens-dresses">Dresses</NavLink>
        ),
        key: "womenDresses",
      },
      {
        label: <NavLink to="products/categories/womens-shoes">Shoes</NavLink>,
        key: "womenShoes",
      },
      {
        label: (
          <NavLink to="products/categories/womens-watches">Watches</NavLink>
        ),
        key: "womenWatches",
      },
      {
        label: <NavLink to="products/categories/womens-bags">Bags</NavLink>,
        key: "womenBags",
      },
      {
        label: (
          <NavLink to="products/categories/womens-jewellery">Jewellery</NavLink>
        ),
        key: "womenJewellery",
      },
    ],
  },
  {
    label: <NavLink to="/about">About</NavLink>,
    key: "about",
  },
];

const ShoppingCart = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCardItems] = useState([]);

  useEffect(() => {
    getSingleCard(1).then((res) => setCardItems(res.products));
  }, []);

  const handleCheckoutSubmit = () => {
    setCartDrawerOpen(false);
    message.success("Your order has been placed successfully.");
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
        <Table
          dataSource={cartItems}
          pagination={false}
          rowKey={(data) => data.id}
          summary={(data) => {
            const total = data.reduce((prev, curr) => {
              return prev + curr.total;
            }, 0);

            const discountPrice = data.reduce((prev, curr) => {
              return prev + curr.discountedPrice;
            }, 0);

            return (
              <>
                <tr>
                  <td colSpan="4">
                    <span className="cartSummary">
                      Discounted amount: $
                      {parseFloat(total - discountPrice).toFixed(0)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <span className="cartSummary">
                      Total amount: ${parseFloat(discountPrice).toFixed(0)}{" "}
                      <Typography.Text delete type="danger">
                        ${parseFloat(total).toFixed(0)}
                      </Typography.Text>
                    </span>
                  </td>
                </tr>
              </>
            );
          }}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
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
                              total: item.price * value,
                              discountedPrice:
                                (item.price *
                                  value *
                                  (100 - item.discountPercentage)) /
                                100,
                            }
                          : item;
                      });
                      setCardItems(newCartItems);
                    }}
                  />
                );
              },
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value, record) => {
                return `$${value}`;
              },
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (value, record) => {
                return `$${value}`;
              },
            },
          ]}
        />
        <CheckoutCartBtn onFinish={() => handleCheckoutSubmit()} />
      </Drawer>
    </>
  );
};

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

function AppHeader() {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    // navigator(`/${e.key}`);
  };

  return (
    <div className="appHeader">
      <div className="menuHeader">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={menuItems}
          theme="light"
        />
      </div>
      <div className="appTitle">
        <Typography.Title>Toni Store</Typography.Title>
      </div>
      <div className="shoppingCart">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default AppHeader;
