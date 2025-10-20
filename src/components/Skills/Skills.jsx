import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

// Importing icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaGitAlt, FaDatabase, FaNodeJs, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiMui, SiExpress } from 'react-icons/si';
import { PiBrainFill } from 'react-icons/pi';


const Skills = () => {
  const skills = [
  { name: "HTML", icon: <FaHtml5 color="#fff" /> },
  { name: "CSS", icon: <FaCss3Alt color="#fff" /> },
  { name: "JavaScript", icon: <FaJs color="#fff" /> },
  { name: "React", icon: <FaReact color="#fff" /> },
  { name: "Angular", icon: <FaAngular color="#fff" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
  { name: "TypeScript", icon: <SiTypescript color="#fff" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#fff" /> },
  { name: "Git", icon: <FaGitAlt color="#fff" /> },
  { name: "SQL", icon: <FaDatabase color="#fff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#fff" /> },
  { name: "Node.js", icon: <FaNodeJs color="#fff" /> },
  { name: "Express.js", icon: <SiExpress color="#fff" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#fff" /> },
  { name: "Material UI", icon: <SiMui color="#fff" /> },
  { name: "Figma", icon: <FaFigma color="#fff" /> },
  { name: "AI", icon: <PiBrainFill color="#fff" /> },
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
            <div key={index} className="skill-item">
              {skill.icon}
              <span style={{ marginLeft: '8px' }}>{skill.name}</span>
            </div>
          ))}
          {/* duplicate for infinite loop */}
          {skills.map((skill, index) => (
            <div key={index + skills.length} className="skill-item">
              {skill.icon}
              <span style={{ marginLeft: '8px' }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
