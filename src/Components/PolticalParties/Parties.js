import React from "react";
import "./Parties.css";
import Tab from "./Tab";
import Card from "./Card";
import AAP from "../../assets/images/AAP.png";
import BSP from "../../assets/images/bahujansamajparty.png";
import BJP from "../../assets/images/BJP.png";
import CPI from "../../assets/images/CPI.png";
import Congress from "../../assets/images/Congress.svg";
import NPP from "../../assets/images/NPP.png";

const PartyList = [
  {
    name: "Aam Aadmi Party (AAP)",
    address: "206, Rause Avenue, DDU Marg, New Delhi - 11002",
    image: AAP,
    link: "https://aamaadmiparty.org/"
  },
  {
    name: "Bahujan Samaj Party (BSP)",
    address: "Bungalow No. 29, Lodhi Estate, New Delhi - 11003",
    image: BSP,
    link: "https://www.bspindia.co.in/"
  },
  {
    name: "Bharatiya Janata Party (BJP)",
    address: "6-A, Deen Dayal Upadhyaya Marg, New Delhi - 11002",
    image: BJP,
    link: "https://www.bjp.org/home"
  },
  {
    name: "Communist Party of India (CPI)",
    address:
      "A.K. Gopalan Bhawan, 27-29, Bhai Vir Singh Marg (Gole Market), New Delhi - 110001",
    image: CPI,
    link: "https://cpim.org/"
  },
  {
    name: "Indian National Congress (INC)",
    address: "24, Akbar Road, New Delhi - 110011",
    image: Congress,
    link: "https://www.inc.in/"
  },
  {
    name: "National People's Party (NPP)",
    address:
      "Plot No. 90A, Lachaumiere District, East Khasi Hills District, Shillong - 793001",
    image: NPP,
    link: "https://nppindia.in/"
  },
];

const StatePartyList = [
  {
    name: "Aam Aadmi Party (AAP)",
    address: "206, Rause Avenue, DDU Marg, New Delhi - 11002",
    image: AAP,
    link: "https://aamaadmiparty.org/"
  },
  {
    name: "Bahujan Samaj Party (BSP)",
    address: "Bungalow No. 29, Lodhi Estate, New Delhi - 11003",
    image: BSP,
    link: "https://www.bspindia.co.in/"
  },
  {
    name: "Bharatiya Janata Party (BJP)",
    address: "6-A, Deen Dayal Upadhyaya Marg, New Delhi - 11002",
    image: BJP,
    link: "https://www.bjp.org/home"
  },
  {
    name: "Communist Party of India (CPI)",
    address:
      "A.K. Gopalan Bhawan, 27-29, Bhai Vir Singh Marg (Gole Market), New Delhi - 110001",
    image: CPI,
    link: "https://cpim.org/"
  },
  {
    name: "Indian National Congress (INC)",
    address: "24, Akbar Road, New Delhi - 110011",
    image: Congress,
    link: "https://www.inc.in/"
  },
];

const tabs = [
  {
    title: "National Parties",
    content: (
      <>
        <div className="grid-container">
          {PartyList.map((value) => (
            <div className="grid-item">
              <Card
                image={value.image}
                title={value.name}
                subtitle={value.address}
                link={value.link}
              />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "State Parties",
    content: (
      <>
        <div className="grid-container">
          {StatePartyList.map((value) => (
            <div className="grid-item">
              <Card
                image={value.image}
                title={value.name}
                subtitle={value.address}
                link={value.link}
              />
            </div>
          ))}
        </div>
      </>
    ),
  },
];

const Parties = () => {
  return (
    <div className="parties-container">
      <h2>Political Parties</h2>
      <Tab tabs={tabs} />
    </div>
  );
};

export default Parties;
