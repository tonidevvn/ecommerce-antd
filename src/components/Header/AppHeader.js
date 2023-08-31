import { Typography } from "antd";
import "./AppHeader.scss";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import MainMenu from "../Menu/MainMenu";

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
