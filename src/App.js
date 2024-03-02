// Import data

// Import components
import "./App.css";
import Gallery from "./Gallery";
import Searchbar from "./Searchbar";
import Directory from "./Directory";
import Sidebar from "./Sidebar";
import Help from "./Help";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
        <Help />
      </div>
    </div>
  );
}

export default App;
