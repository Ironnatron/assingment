import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Map from "./Components/Content/Map";
import close from "./assets/images/closeicon.png"
import { useState, useEffect } from "react";
function App() {
  const [currentComponent, setCurrentComponent] = useState({
    Home: true,
    Parties: false,
    Dates: false,
    Info: false,
  });
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    console.log("Current Component 1", currentComponent);
  }, [currentComponent]);

  const handleNavigation = (value) => {
    const updatedComponent = Object.fromEntries(
      Object.keys(currentComponent).map((key) => [key, key === value])
    );
    setCurrentComponent(updatedComponent);
    console.log("Current Component", currentComponent);
  };

  return (
    <>
      {mobileMenu && (
        <div className={`mobile-drawer ${mobileMenu ? "open" : ""}`}>
          <span
            className="menu-icon"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <img src={close} alt="menu" height={20} width={20} />
          </span>
          <br />
          {mobileMenu && (
            <ul className="mini-navlink">
              <li
                className="mini-navlink-item"
                onClick={() => handleNavigation("Home")}
              >
                Home
              </li>
              <li
                className="mini-navlink-item"
                onClick={() => handleNavigation("Parties")}
              >
                Political Parties
              </li>
              <li
                className="mini-navlink-item"
                onClick={() => handleNavigation("Dates")}
              >
                Election Dates
              </li>
              <li
                className="mini-navlink-item"
                onClick={() => handleNavigation("Info")}
              >
                Voter's Guide
              </li>
            </ul>
          )}
        </div>
      )}
      <div className="parent">
        <Navbar
          handleNavigation={handleNavigation}
          toggleMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
        <div className="container-fluid">
          <Map currentComponent={currentComponent} />
        </div>
      </div>
    </>
  );
}

export default App;
