import DisplayData from "./components/DisplayData";
import SearchForm from "./components/SearchForm";

import "../src/css/style.scss";
import DisplayImage from "./components/DisplayImage";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Covid Tracker</h1>
        <SearchForm />
        <div className="data-container">
          <DisplayImage />
          <DisplayData />
        </div>
      </div>
    </div>
  );
}

export default App;
