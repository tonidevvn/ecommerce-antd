import { createContext, useState } from "react";
import { getColorMode } from "../utils";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [colorMode, setColorMode] = useState(getColorMode());

  const contextValues = {
    cartItems,
    setCartItems,
    colorMode,
    setColorMode,
    user,
    setUser,
  };
  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
