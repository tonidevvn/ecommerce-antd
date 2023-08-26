import { Badge, Menu, Typography } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./AppHeader.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <Badge count={5}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </div>
    </div>
  );
}

export default AppHeader;
