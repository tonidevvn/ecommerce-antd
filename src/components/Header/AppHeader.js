import "./AppHeader.scss";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import MainMenu from "../Menu/MainMenu";
import SearchBox from "../SearchBox";
import { Typography } from "antd";

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
      <div className="rightHeader">
        <div className="searchCard">
          <SearchBox />
        </div>

        <div className="shoppingCart">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
