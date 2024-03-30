import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Map from "./Components/Content/Map";
import { useState, useEffect } from "react";
function App() {
  const [currentComponent, setCurrentComponent] = useState({
    "Home": true,
    "Parties": false,
    "Dates": false,
    "Info": false
  });

  useEffect(() => {
    console.log("Current Component 1", currentComponent);
  }, [currentComponent, ]);

  const handleNavigation = (value) => {
    const updatedComponent = Object.fromEntries(
      Object.keys(currentComponent).map(key => [key, key === value])
    );
    setCurrentComponent(updatedComponent);
    console.log("Current Component", currentComponent);
  }

  return (
    <div className="parent">
      <Navbar handleNavigation={handleNavigation} />
      <div className="container-fluid">
        <Map currentComponent={currentComponent} />
      </div>
    </div>
  );
}

export default App;
