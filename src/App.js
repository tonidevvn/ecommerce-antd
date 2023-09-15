import "./App.scss";
import ThemeProvider from "./themes/ThemeProvider";

function App({ children }) {
  return (
    <ThemeProvider>
      <div className="App">{children}</div>
    </ThemeProvider>
  );
}

export default App;
