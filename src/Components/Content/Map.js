import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import India from "@svg-maps/india";
import React, { useState, useEffect } from "react";
// import TabsInfo from "../Tabs/TabsInfo";
import axios from "axios";

import "./Map.css"; // Import CSS file for Map component styling
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
    setStateName(event.target.getAttribute("name"));
    setShowPopup(true); // Show popup on hover
    console.log("Name", event.target.getAttribute("name"));
  };

  const onLocationMouseOut = (event) => {
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
     {
      currentComponent?.Home &&  
    <div className="container">
      <div className="box">
        <SVGMap
          map={India}
          onLocationClick={onLocationClick}
          // onLocationMouseOver={onLocationHover}
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
          <header className="heading">Your Election Hub: Stay Informed, Engage, and Decide</header>
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
     }
     {
      currentComponent?.Parties && <Parties />
     }
     {
      currentComponent?.Dates && <Dates />
     }
     {
      currentComponent?.Info && <Guide />
     }
    </>
  );
};

export default Map;
