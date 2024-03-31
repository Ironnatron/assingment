import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import India from "@svg-maps/india";
import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../../assets/data";

import "./Map.css";
import Popup from "./Popup";
import Parties from "../PolticalParties/Parties";
import Dates from "../Dates/Dates";
import Guide from "../Guide/Guide";

const Map = ({ currentComponent }) => {
  const [stateName, setStateName] = useState();
  const [locationClick, setLocationClick] = useState(false);
  const [getAllInfo, setAllInfo] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const getTotalInfo = async () => {
    const { data } = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/states",
      {
        country: "India",
      }
    );
    console.log("data", data);
    setAllInfo(data);
  };

  useEffect(() => {
    getTotalInfo();
  }, []);

  const onLocationClick = (event) => {
    setStateName(event.target.getAttribute("name"));
    setShowPopup(true); // Show popup on click
    setLocationClick(true);
    console.log("Name", event.target.getAttribute("name"));
  };

  const onLocationHover = (event) => {
    //extracting state name from event
    var stateName = event.target.getAttribute("name");

    // Scale the SVG element
    event.target.style.transform = "scale(1.0125)";

    event.target.addEventListener("mouseout", function () {
      // Remove the tooltip element from the DOM
      removeTooltip();
      // Reset the styles of the SVG element
      event.target.style.transform = "";
    });

    // Create tooltip element
    createTooltip(event, stateName);
  };

  const createTooltip = (event, stateName) => {
    // Create a div element for the tooltip
    var divElement = document.createElementNS(
      "http://www.w3.org/1999/xhtml",
      "div"
    );

    // CSS styles for the tooltip
    divElement.id = "tooltip";
    divElement.textContent = stateName;
    divElement.style.backgroundColor = "black";
    divElement.style.padding = "10px";
    divElement.style.borderRadius = "12px";
    divElement.style.color = "white";
    divElement.style.fontFamily = "Poppins";
    divElement.style.fontSize = "14px";
    divElement.style.fontWeight = 600;
    divElement.style.position = "absolute";
    divElement.style.left = event.clientX + window.scrollX + "px";
    divElement.style.top = event.clientY + window.scrollY + "px";
    divElement.style.zIndex = "9999";

    divElement.innerHTML = `
    <div>
    <p style="font-size: 16px, font-weight: 500,font-family: Poppins">${stateName}</p>
      <p style="padding: 0, margin: 0">Current Government: ${data[stateName].ruling_party}</p>
      <p>Chief Minister: ${data[stateName].chief_minister}</p>
    </div>
    `;

    // Append the tooltip to the body
    document.body.appendChild(divElement);

    // Log stateName to the console
    console.log("Name", stateName);
  };

  const removeTooltip = () => {
    // Find and remove the tooltip element from the DOM
    var tooltipElement = document.querySelector("#tooltip");
    if (tooltipElement) {
      tooltipElement.parentNode.removeChild(tooltipElement);
    }
  };

  const onLocationMouseOut = (event) => {
    removeTooltip();
    setStateName(event.target.getAttribute("name"));
    if (locationClick) {
      setShowPopup(true); // Show popup on hover
    } else {
      setShowPopup(false);
    }
    console.log("Name", event.target.getAttribute("name"));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {currentComponent?.Home && (
        <div className="container">
          <div className="box">
            <SVGMap
              map={India}
              onLocationClick={onLocationClick}
              onLocationMouseOver={onLocationHover}
              // onLocationMouseOut={onLocationMouseOut}
            />
          </div>
          <div className="box">
            {/* {showPopup && stateName && (
          <>
            <div className="popup-overlay" onClick={closePopup}></div>
            <Popup stateName={stateName} onClose={closePopup} />
          </>
        )} */}
            <>
              <span className="brand">Election Hub</span>
              <header className="heading">
                Your Election Hub: Stay Informed, Engage, and Decide
              </header>
              <subtitle className="sub-heading">
                Empowering Democracy: Explore Candidates, Policies, and Voting
                Information
              </subtitle>
            </>
          </div>
          {showPopup && stateName && (
            <>
              <div className="popup-overlay" onClick={closePopup}></div>
              <Popup stateName={stateName} onClose={closePopup} />
            </>
          )}
        </div>
      )}
      {currentComponent?.Parties && <Parties />}
      {currentComponent?.Dates && <Dates />}
      {currentComponent?.Info && <Guide />}
    </>
  );
};

export default Map;
