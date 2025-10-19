import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Angular", "Next.js",
    "TypeScript", "Tailwind", "Git", "SQL", "MongoDB", "Node.js"
  ];

  return (
    <div id='services' className='skills'>
      <div className="skills-title">
        <h1 className="skills-heading">Stacks I use</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>

      <div className="skills-marquee">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">{skill}</div>
          ))}
          {/* duplicate for infinite loop */}
          {skills.map((skill, index) => (
            <div key={index + skills.length} className="skill-item">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
