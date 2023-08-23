import AppBody from "../components/PageContent";
import "./App.scss";
import LayoutWithSidebar from "../layouts/LayoutWithSidebar";

function App() {
  return (
    <div className="App">
      <LayoutWithSidebar>
        <AppBody />
      </LayoutWithSidebar>
    </div>
  );
}

export default App;
