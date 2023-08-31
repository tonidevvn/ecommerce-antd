import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartInfo, setCartInfo] = useState();
  const [colorMode, setColorMode] = useState("light");

  const contextValues = {
    cartItems,
    setCartItems,
    colorMode,
    setColorMode,
    cartInfo,
    setCartInfo,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
