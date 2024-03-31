import React from "react";
import "./Guide.css";
import review from "../../assets/images/review.png";
import followup from "../../assets/images/followup.png";
import ballot from "../../assets/images/ballot.png";
import checkinfo from "../../assets/images/checkinfo.png";
import encourage from "../../assets/images/encourage.png";
import needassesment from "../../assets/images/needassessment.png";
import register from "../../assets/images/register.png";
import research from "../../assets/images/research.png";
import time from "../../assets/images/time.png";

const VotersGuide = [
  {
    title: "Register to Vote",
    subtitle:
      "Ensure you're registered to vote well before the election day deadline. You can usually register online, by mail, or in person at your local election office.",
    icon: register,
  },
  {
    title: "Research the Candidates",
    subtitle: "Take the time to learn about the candidates running for various offices. Look into their backgrounds, experience, policies, and platforms. Pay attention to their stance on issues important to you.",
    icon: research,
  },
  {
    title: "Check Your Voter Information",
    subtitle: "Confirm your polling place, as it may change from one election to another. Make sure you know the hours the polls are open and any identification requirements.",
    icon: checkinfo,
  },
  {
    title: "Consider Absentee or Early Voting",
    subtitle: "If you can't vote in person on election day, explore options for absentee or early voting in your state. This ensures your vote is still counted.",
    icon: time,
  },
  {
    title: "Bring Necessary Materials",
    subtitle: "On election day, bring any required identification documents, such as a driver's license or passport. You might also want to bring a sample ballot or notes to help you remember your choices.    ",
    icon: needassesment,
  },
  {
    title: "Vote",
    subtitle: "When you arrive at the polling place, follow the instructions provided by the poll workers. Fill out your ballot carefully, following all instructions. If you have any questions, don't hesitate to ask a poll worker for assistance.",
    icon: ballot,
  },
  {
    title: "Review Your Ballot",
    subtitle: "Before submitting your ballot, double-check your choices to ensure you've marked them correctly. Once you're satisfied, submit your ballot as directed.",
    icon: review,
  },
  {
    title: "Follow Up",
    subtitle: "If you voted by mail or absentee ballot, make sure to follow up to ensure your vote was received and counted.",
    icon: followup,
  },
  
  {
    title: "Encourage Others to Vote",
    subtitle: "Spread the word about the importance of voting and encourage friends, family, and colleagues to participate in the electoral process.",
    icon: encourage,
  },
];

const Guide = () => {
  return (
    <div className="parties-container">
      <h2>Voter's Guide</h2>

      <div className="guide-container">
        {VotersGuide.map((value, index) => (
          <div className={`guide-card ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="details">
              <h3 className="guide-title">{value.title}</h3>
              <p className="guide-para">{value.subtitle}</p>
            </div>
            <div className="logo">
              <img src={value.icon} alt={"Alternate"} height={50} width={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
