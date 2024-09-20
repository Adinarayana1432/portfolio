import React, { useState, useRef } from 'react';
import '../pages/readmore.css'; // Import the CSS file
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";


const DraggableSliderTabs = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const tabsContainerRef = useRef(null);

  const tabs = [
    'All', 'JavaScript', 'HTML', 'CSS', 'upCoding', 'Web Development',
    'Programming', 'Databases', 'Computer Science', 'React.js', 'Coding',
    'SQL', 'MongoDB', 'Angular', 'Node.js', 'Web Design', 'Editing',
    'Recently uploaded', 'Watched', 'News'
  ];

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    tabsContainerRef.current.scrollLeft -= e.movementX;
    toggleIcons();
  };

  const toggleIcons = () => {
    const scroll = tabsContainerRef.current.scrollLeft;
    const maxScroll = tabsContainerRef.current.scrollWidth - tabsContainerRef.current.clientWidth;
    document.querySelector('.icon-left').style.display = scroll > 0 ? 'flex' : 'none';
    document.querySelector('.icon-right').style.display = maxScroll > scroll ? 'flex' : 'none';
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleLeftClick = () => {
    tabsContainerRef.current.scrollLeft -= 400;
    setTimeout(toggleIcons, 40);
  };

  const handleRightClick = () => {
    tabsContainerRef.current.scrollLeft += 400;
    setTimeout(toggleIcons, 40);
  };

  return (
    <div className="container">
      <div className="icon icon-left" onClick={handleLeftClick}>
        <FaLessThan className="fa-solid fa-angle-left" />
      </div>
      <ul
        className="tabs"
        ref={tabsContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {tabs.map(tab => (
          <li
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="icon icon-right" onClick={handleRightClick}>
    
        <FaGreaterThan className="fa-solid fa-angle-right"/>
      </div>
    </div>
  );
};

export default DraggableSliderTabs;
