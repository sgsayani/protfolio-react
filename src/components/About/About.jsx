import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/SG.png'

const About = () => {
  return (
    <div id='about'  className='about' >
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a frontend developer with a passion for creating user-friendly and visually appealing websites. I have experience in designing and developing responsive websites, as well as front-end development using HTML, CSS, ReactJS, AngularJs, NextJs and JavaScript. I am constantly learning and improving my skills to stay at the forefront of web development.</p>
                     <p>I am a frontend developer with a passion for creating user-friendly and visually appealing websites. I have experience in designing and developing responsive websites, as well as front-end development using HTML, CSS, ReactJS, AngularJs, NextJs and JavaScript. I am constantly learning and improving my skills to stay at the forefront of web development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"60%"}}/>
                    </div>
                </div>
            </div>
        </div>
      <div className="about-achievements">
        <div className="about-achivement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default About
