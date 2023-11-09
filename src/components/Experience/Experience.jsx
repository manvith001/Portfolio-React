import React, { useContext } from 'react';
import './Experience.css';
import { themeContext } from '../../Context';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achivement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>2+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achivement">
        <div className="circle">10+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Completed</span>
        <br />
        <span>Projects</span>
      </div>
      <div className="achivement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>5+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Awards</span>
        <span>Received</span>
      </div>
    </div>
  );
};

export default Experience;
