// Tab.js
import React, { useState } from 'react';
import './Tab.css'; // Import CSS file for styling (optional)

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;
