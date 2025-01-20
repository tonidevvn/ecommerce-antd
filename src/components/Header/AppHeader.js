import "./AppHeader.scss";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import MainMenu from "../Menu/MainMenu";
import SearchBox from "../SearchBox";
import { Typography } from "antd";
import ToogleModeColor from "../DarkMode";

function AppHeader() {
  return (
    <div className="appHeader">
      <div className="menuHeader">
        <MainMenu />
      </div>
      <div className="appTitle">
        <Link to="/">
          <Typography.Title level={2}>Toni Store 🛍</Typography.Title>
        </Link>
      </div>
      <div className="rightHeader">
        <div className="searchCard">
          <SearchBox />
        </div>
        <div className="darkMode">
          <ToogleModeColor />
        </div>
        <div className="shoppingCart">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
