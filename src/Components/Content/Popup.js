import React, { useState } from "react";
import "./Popup.css";
import AssamGeo from "../../assets/images/assamgeo-66098cb437ef4.webp";
import Tab from "../PolticalParties/Tab";
import Closeicon from "../../assets/images/closeicon25-66098cbed3a71.webp";
import Andhra from "../../assets/images/andhra-66098cb028d38.webp";
import Arunachal from "../../assets/images/arunachalgeo-66098cb2260f2.webp";
import Assam from "../../assets/images/assamgeo-66098cb437ef4.webp";
import Bihar from "../../assets/images/bihargeo-66098cb8c0f00.webp";
import Chhattisgarh from "../../assets/images/chattisgarhgeo-66098cbc2ab3e.webp";
import Goa from "../../assets/images/goageo-66098cc2aa834.webp";
import Gujarat from "../../assets/images/gujratgeo-66098cc3e952a.webp";
import Haryana from "../../assets/images/haryana-66098cc4be79f.webp";
import Himachal from "../../assets/images/himachal-66098cc6b5de9.webp";
import Jammu from "../../assets/images/jammu-66098cc8823ac.webp";
import Jharkhand from "../../assets/images/jharkhand-66098cc8cd684.webp";
import Karnataka from "../../assets/images/karnataka-66098ccadff10.webp";
import Kerala from "../../assets/images/kerala-66098cccb4201.webp";
import Madhya from "../../assets/images/madhyapradesh-66098cce682f5.webp";
import Maharashtra from "../../assets/images/maharastra-66098cd11b380.webp";
import Manipur from "../../assets/images/manipur-66098cd3620c1.webp";
import Meghalaya from "../../assets/images/meghalaya-66098cd501434.webp";
import Mizoram from "../../assets/images/mizoram-66098cd70223b.webp";
import Nagaland from "../../assets/images/nagaland-66098cd850647.webp";
import Odisha from "../../assets/images/odisha-66098cda52633.webp";
import Punjab from "../../assets/images/punjab-66098cdb43447.webp";
import Rajasthan from "../../assets/images/rajasthan-66098cdccbee3.webp";
import Sikkim from "../../assets/images/sikkim-66098cded6419.webp";
import TamilNadu from "../../assets/images/tamilnadu-66098cdf9de29.webp";
import Telangana from "../../assets/images/telengana-66098ce10264b.webp";
import Tripura from "../../assets/images/tripura-66098ce2437f6.webp";
import UttarPradesh from "../../assets/images/Uttarpradesh 10.00.02 PM.png";
import Uttarakhand from "../../assets/images/uttarakhand-66098ce2d1bfe.webp";
import WestBengal from "../../assets/images/Westbengal 10.00.02 PM.png";

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
