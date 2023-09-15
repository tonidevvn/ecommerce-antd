import { ReactComponent as LightToogleIco } from "../../assets/images/lightToogle.svg";
import { ReactComponent as DarkToogleIco } from "../../assets/images/darkToogle.svg";
import { useContext } from "react";
import { AppContext } from "../../context";

function ToogleModeColor() {
  const { colorMode, setColorMode } = useContext(AppContext);

  return (
    <>
      <div className="ms-1 colorModeToogle">
        <a
          href="#"
          className="colorModeToogleBtn"
          onClick={() => {
            const newMode = colorMode === "light" ? "dark" : "light";
            setColorMode(newMode);
            console.log("color mode >>> ", newMode);
          }}
          alt="Switch between dark and light mode"
        >
          {colorMode === "dark" ? <LightToogleIco /> : <DarkToogleIco />}
        </a>
      </div>
    </>
  );
}

export default ToogleModeColor;
