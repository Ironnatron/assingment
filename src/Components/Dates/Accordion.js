import React, { useState } from 'react';
import "./Accordion.css"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(content)
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div style={{
          fontWeight: 700
        }}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;