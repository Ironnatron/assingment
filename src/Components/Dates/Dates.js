import React, { useState } from "react";
import "./Dates.css";
import Accordion from "./Accordion";

import Chip from "./Chip";

const generalElection = [
  {
    title: "Phase 1",
    date: "19 April 2024",
    subtitle1: "102 Constituencies",
    subtitle2: "21 States",
  },
  {
    title: "Phase 2",
    date: "26 April 2024",
    subtitle1: "89 Constituencies",
    subtitle2: "13 States",
  },
  {
    title: "Phase 3",
    date: "07 May 2024",
    subtitle1: "94 Constituencies",
    subtitle2: "12 States",
  },
  {
    title: "Phase 4",
    date: "13 May 2024",
    subtitle1: "96 Constituencies",
    subtitle2: "10 States",
  },
  {
    title: "Phase 5",
    date: "20 May 2024",
    subtitle1: "49 Constituencies",
    subtitle2: "8 States",
  },
  {
    title: "Phase 6",
    date: "25 May 2024",
    subtitle1: "57 Constituencies",
    subtitle2: "7 States",
  },
  {
    title: "Phase 7",
    date: "01 June 2024",
    subtitle1: "57 Constituencies",
    subtitle2: "8 States",
  },
];

const odishaElection = [
  {
    title: "Phase 1",
    date: "13 May 2024",
    subtitle1: "All 42 ACs",
    // subtitle2: "21 States",
  },
  {
    title: "Phase 2",
    date: "20 May 2024",
    subtitle1: "All 42 ACs",
    // subtitle2: "13 States",
  },
  {
    title: "Phase 3",
    date: "25 May 2024",
    subtitle1: "All 42 ACs",
    // subtitle2: "12 States",
  },
  {
    title: "Phase 4",
    date: "01 June 2024",
    subtitle1: "All 42 ACs",
    // subtitle2: "10 States",
  },
];

const arunachalElection = [
  {
    title: "Phase 1",
    date: "19 April 2024",
    subtitle1: "All 42 ACs",
    // subtitle2: "21 States",
  },
];

const andhraElection = [
  {
    title: "Phase 1",
    date: "13 May 2024",
    subtitle1: "All 42 ACs",
    // subtitle2: "21 States",
  },
];

const Dates = () => {
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  const accordionData = [
    {
      id: 1,
      title: "GENERAL ELECTIONS TO LOK SABHA",
      content: (
        <>
          <div className="dates-grid-container">
            {generalElection.map((value) => (
              <div className="dates-grid-item">
                <Chip
                  open={open}
                  title={value.title}
                  date={value.date}
                  subtitle1={value.subtitle1}
                  subtitle2={value.subtitle2}
                />
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "ODISHA ELECTION",
      content: (
        <>
          <div className="dates-grid-container">
            {odishaElection.map((value) => (
              <div className="dates-grid-item">
                <Chip
                  open={open}
                  title={value.title}
                  date={value.date}
                  subtitle1={value.subtitle1}
                  // subtitle2={value.subtitle2}
                />
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: "ARUNACHAL PRADESH ELECTION",
      content: (
        <div className="dates-grid-container">
          {arunachalElection.map((value) => (
            <div className="dates-grid-item">
              <Chip
                open={open}
                title={value.title}
                date={value.date}
                subtitle1={value.subtitle1}
                // subtitle2={value.subtitle2}
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 4,
      title: "ANDHRA PRADESH ELECTION",
      content: (
        <div className="dates-grid-container">
          {andhraElection.map((value) => (
            <div className="dates-grid-item">
              <Chip
                open={open}
                title={value.title}
                date={value.date}
                subtitle1={value.subtitle1}
                // subtitle2={value.subtitle2}
              />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="parties-container">
      <h2>Upcoming Elections</h2>

      {accordionData.map(({ id, title, content }) => (
        <Accordion
          id={id}
          title={title}
          content={content}
          opened={openAccordion === id}
          onAccordionClick={handleAccordionClick}
        />
      ))}
    </div>
  );
};

export default Dates;
