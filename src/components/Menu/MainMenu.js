import { Button, Menu, Drawer } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnScreen from "../../utils";

const MainMenu = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("home");
  const menuBtnRef = useRef(null);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setVisible(false);
    // navigator(`/${e.key}`);
  };

  const menuMobile = [
    {
      label: (
        <NavLink to="/products/categories/smartphones">Smartphones</NavLink>
      ),
      key: "smartphones",
    },
    {
      label: <NavLink to="/products/categories/laptops">Laptops</NavLink>,
      key: "laptops",
    },
    {
      label: "Men Accessories",
      key: "menAccessories",
      children: [
        {
          label: (
            <NavLink to="/products/categories/mens-shirts">Shirts</NavLink>
          ),
          key: "menShirts",
        },
        {
          label: <NavLink to="/products/categories/mens-shoes">Shoes</NavLink>,
          key: "menShoes",
        },
        {
          label: (
            <NavLink to="/products/categories/mens-watches">Watches</NavLink>
          ),
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
            <NavLink to="/products/categories/womens-dresses">Dresses</NavLink>
          ),
          key: "womenDresses",
        },
        {
          label: (
            <NavLink to="/products/categories/womens-shoes">Shoes</NavLink>
          ),
          key: "womenShoes",
        },
        {
          label: (
            <NavLink to="/products/categories/womens-watches">Watches</NavLink>
          ),
          key: "womenWatches",
        },
        {
          label: <NavLink to="/products/categories/womens-bags">Bags</NavLink>,
          key: "womenBags",
        },
        {
          label: (
            <NavLink to="/products/categories/womens-jewellery">
              Jewellery
            </NavLink>
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

  const menuLgScreen = [
    {
      label: (
        <NavLink to="/">
          <HomeOutlined />
        </NavLink>
      ),
      key: "home",
    },
    ...menuMobile,
  ];

  const MenuShowing = ({ mode = "horizontal", visible = true, menuItems }) => {
    return visible ? (
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={mode}
        items={menuItems}
        theme="light"
        className="mainMenu"
      />
    ) : (
      <></>
    );
  };

  const menuBtnVisible = useOnScreen(menuBtnRef);

  return (
    <>
      <MenuShowing visible={!menuBtnVisible} menuItems={menuLgScreen} />
      <Button
        className="menuBtn"
        type="dashed"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
        ref={menuBtnRef}
      />
      <Drawer
        title="Toni Store"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <MenuShowing mode="inline" menuItems={menuMobile} />
      </Drawer>
    </>
  );
};

export default MainMenu;
