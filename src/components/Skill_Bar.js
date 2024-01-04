import React from 'react';

const SkillBar = ({ name, level }) => {
  const getBarWidth = () => {
    // Define maximum width for the skill bar (adjust as needed)
    const maxWidth = 200;
    // Assuming the maximum level is 5 and each level is 20px
    return `${level * 20}px`;
  };

  return (
    <div className="skill">
      <p>{name}</p>
      <div className="skill-bar">
        <div className="skill-level" style={{ width: getBarWidth() }}></div>
      </div>
    </div>
  );
};

export default SkillBar;