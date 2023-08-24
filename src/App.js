import PageContent from "./components/PageContent";
import "./App.scss";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";

function App() {
  return (
    <div className="App">
      <LayoutWithSidebar>
        <PageContent />
      </LayoutWithSidebar>
    </div>
  );
}

export default App;
