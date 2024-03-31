import React, { useState } from "react";
import "./Popup.css";
import AssamGeo from "../../assets/images/AssamGeo.png";
import Tab from "../PolticalParties/Tab";
import Closeicon from "../../assets/images/closeIcon25.png";
import Andhra from "../../assets/images/Andhra.png";
import Arunachal from "../../assets/images/ArunachalGeo.png";
import Assam from "../../assets/images/AssamGeo.png";
import Bihar from "../../assets/images/BiharGeo.png";
import Chhattisgarh from "../../assets/images/ChattisgarhGeo.png";
import Goa from "../../assets/images/GoaGeo.png";
import Gujarat from "../../assets/images/GujratGeo.png";
import Haryana from "../../assets/images/Haryana.png";
import Himachal from "../../assets/images/Himachal.png";
import Jammu from "../../assets/images/Jammu.png";
import Jharkhand from "../../assets/images/Jharkhand.png";
import Karnataka from "../../assets/images/Karnataka.png";
import Kerala from "../../assets/images/Kerala.png";
import Madhya from "../../assets/images/MadhyaPradesh.png";
import Maharashtra from "../../assets/images/Maharastra.png";
import Manipur from "../../assets/images/Manipur.png";
import Meghalaya from "../../assets/images/Meghalaya.png";
import Mizoram from "../../assets/images/Mizoram.png";
import Nagaland from "../../assets/images/Nagaland.png";
import Odisha from "../../assets/images/Odisha.png";
import Punjab from "../../assets/images/Punjab.png";
import Rajasthan from "../../assets/images/Rajasthan.png";
import Sikkim from "../../assets/images/Sikkim.png";
import TamilNadu from "../../assets/images/TamilNadu.png";
import Telangana from "../../assets/images/Telengana.png";
import Tripura from "../../assets/images/Tripura.png";
import UttarPradesh from "../../assets/images/Uttarpradesh.png";
import Uttarakhand from "../../assets/images/Uttarakhand.png";
import WestBengal from "../../assets/images/Westbengal.png";

//For Data
import data from "../../assets/data";

const imageMapping = {
  
'Andaman and Nicobar Islands': null,
'Andhra Pradesh': Andhra,
'Arunachal Pradesh': Arunachal,
'Assam': Assam,
'Bihar': Bihar,
'Chandigarh': null,
'Chhattisgarh': Chhattisgarh,
'Dadra and Nagar Haveli': null,
'Daman and Diu': null,
'Delhi': null,
'Goa': Goa,
'Gujarat': Gujarat,
'Haryana': Haryana,
'Himachal Pradesh': Himachal,
'Jammu and Kashmir': Jammu,
'Jharkhand': Jharkhand,
'Karnataka': Karnataka,
'Kerala': Kerala,
'Ladakh': null,
'Lakshadweep': null,
'Madhya Pradesh': Madhya, 
'Maharashtra': Maharashtra,
'Manipur': Manipur,
'Meghalaya': Meghalaya,
'Mizoram': Mizoram,
'Nagaland': Nagaland,
'Odisha': Odisha,
'Puducherry': null,
'Punjab': Punjab,
'Rajasthan': Rajasthan,
'Sikkim': Sikkim,
'Tamil Nadu': TamilNadu,
'Telangana': Telangana, 
'Tripura': Tripura,
'Uttar Pradesh': UttarPradesh,
"Uttarakhand": Uttarakhand,
"West Bengal": WestBengal
}


const Popup = ({ x, y, stateName, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-header">
        <h4
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          {stateName}
        </h4>
        <img
          src={Closeicon}
          alt="close"
          className="close-icon"
          onClick={onClose}
        />
      </div>
      <hr />
      <div>
        {data && (
          <div
            style={{
              fontFamily: "Poppins",
              display: "flex",
            }}
          >
            <div>
              <p>
                <span className="info-label">Captial City</span>{" "}
                <span className="info-value">{data[stateName].capital}</span>{" "}
              </p>
              <p>
                <span className="info-label">Chief Minister:</span>{" "}
                <span className="info-value">
                  {data[stateName].chief_minister}
                </span>{" "}
              </p>
              <p>
                <span className="info-label">Ruling Party:</span>{" "}
                <span className="info-value">
                  {data[stateName].ruling_party}
                </span>{" "}
              </p>
              <p>
                <span className="info-label">Governor:</span>{" "}
                <span className="info-value">{data[stateName].governor}</span>{" "}
              </p>
              <p>
                <span className="info-label">Lok Sabha Seats:</span>{" "}
                <span className="info-value">
                  {data[stateName].seats_lok_sabha}
                </span>{" "}
              </p>
              <p>
                <span className="info-label">Rajya Sabha Seats:</span>{" "}
                <span className="info-value">
                  {data[stateName].seats_in_rajya_sabha}
                </span>{" "}
              </p>
              <br />
              <p className="info-label">Legislative Assembly Seats</p>
              <p>
                <span className="info-label">Total:</span>{" "}
                <span className="info-value">
                  {data[stateName].seats_in_legislative_assembly.total}
                </span>{" "}
              </p>
              <p>
                <span className="info-label">Ruling Party:</span>{" "}
                <span className="info-value">
                  {data[stateName].seats_in_legislative_assembly.ruling_party}
                </span>{" "}
              </p>
              <p>
                <span className="info-label">Opposition:</span>{" "}
                <span className="info-value">
                  {data[stateName].seats_in_legislative_assembly.opposition}
                </span>{" "}
              </p>
            </div>
            <div style={{
              display: "flex",
              margin: 'auto'
            }}>
              <img src={imageMapping[stateName]} alt="Assam" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
