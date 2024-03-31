import React from 'react';
import './Chip.css';

const Chip = ({ open, title, date, subtitle1, subtitle2 }) => {
  return (
    <div className={`chip ${true ? 'loaded' : ''}`}>
      <span className="chip-label">{title}</span>
      <div className='phase-details'>
        <h4 className='chip-date'>{date}</h4>
        <p className='chip-subtitle'>{subtitle1}</p>
        <p className='chip-subtitle'>{subtitle2}</p>
      </div>
    </div>
  );
};

export default Chip;
