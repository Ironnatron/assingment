import React from "react";
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
  const accordionData = [
    {
      title: "GENERAL ELECTIONS TO LOK SABHA",
      content: (
        <>
          <div className="grid-container">
            {generalElection.map((value) => (
              <div className="grid-item">
                <Chip
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
      title: "Odisha Election",
      content: <>
      <div className="grid-container">
        {odishaElection.map((value) => (
          <div className="grid-item">
            <Chip
              title={value.title}
              date={value.date}
              subtitle1={value.subtitle1}
              // subtitle2={value.subtitle2}
            />
          </div>
        ))}
      </div>
    </>,
    },
    {
      title: "Arunachal Pradesh",
      content: <div className="grid-container">
      {arunachalElection.map((value) => (
        <div className="grid-item">
          <Chip
            title={value.title}
            date={value.date}
            subtitle1={value.subtitle1}
            // subtitle2={value.subtitle2}
          />
        </div>
      ))}
    </div>,
    },
    {
      title: "Andhra Pradesh",
      content: <div className="grid-container">
      {andhraElection.map((value) => (
        <div className="grid-item">
          <Chip
            title={value.title}
            date={value.date}
            subtitle1={value.subtitle1}
            // subtitle2={value.subtitle2}
          />
        </div>
      ))}
    </div>,
    },
  ];

  return (
    <div className="parties-container">
      <h2>Upcoming Elections</h2>

      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};

export default Dates;
