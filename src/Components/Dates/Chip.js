import React from 'react';
import './Chip.css';

const Chip = ({ title, date, subtitle1, subtitle2 }) => {
  return (
    <div className="chip">
      <span className="label">{title}</span>
      <div className='phase-details'>
        <h4>{date}</h4>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
      </div>
    </div>
  );
};

export default Chip;