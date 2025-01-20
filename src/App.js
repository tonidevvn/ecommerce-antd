import { useContext } from "react";
import "./App.scss";
import ThemeProvider from "./themes/ThemeProvider";
import { AppContext } from "./context";

function App({ children }) {
  const { colorMode } = useContext(AppContext);
  return (
    <ThemeProvider>
      <div className={`App ${colorMode}`}>{children}</div>
    </ThemeProvider>
  );
}

export default App;
