import { useContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { AppContext } from "../context";
import { saveColorMode } from "../utils";

const defaultThemeConfig = {
  // modify seed token based on color mode
  token: {
    colorText: "#000",
    colorBgContainer: "#fff",
  },
};

const darkThemeConfig = {
  // modify seed token based on color mode
  token: {
    colorText: "#fff",
    colorBgContainer: "#000",
  },
};

const ThemeProvider = ({ children }) => {
  const { colorMode } = useContext(AppContext);

  const [themeConfig, setThemeConfig] = useState(defaultThemeConfig);

  useEffect(() => {
    saveColorMode(colorMode);
    setThemeConfig(
      colorMode === "light" ? defaultThemeConfig : darkThemeConfig
    );
  }, [colorMode]);

  return (
    <>
      <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
    </>
  );
};

export default ThemeProvider;
