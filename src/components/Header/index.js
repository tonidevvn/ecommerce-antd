import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./AppHeader.scss";
import { useState } from "react";

const menuItems = [
  {
    label: <HomeOutlined />,
    key: "home",
  },
  {
    label: "Smartphones",
    key: "smartphones",
  },
  {
    label: "Laptops",
    key: "laptops",
  },
  {
    label: "Men Accessories",
    key: "menAccessories",
    children: [
      { label: "Shirts", key: "menShirts" },
      { label: "Shoes", key: "menShoes" },
      { label: "Watches", key: "menWatches" },
    ],
  },
  {
    label: "Women Accessories",
    key: "womenAccessories",
    children: [
      { label: "Dresses", key: "womenDresses" },
      { label: "Shoes", key: "womenShoes" },
      { label: "Watches", key: "womenWatches" },
      { label: "Bags", key: "womenBags" },
      { label: "Jewellery", key: "womenJewellery" },
    ],
  },
];

function AppHeader() {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="appHeader">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuItems}
        theme="light"
      />
    </div>
  );
}

export default AppHeader;
