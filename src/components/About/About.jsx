import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/SG.png'

const About = () => {
    return (
        <div id='about' className='about'>
            {/* Title */}
            <div className="about-title">
                <h1 className="about-heading">About Me</h1>
                {/* <img src={theme_pattern} alt="theme pattern" /> */}
            </div>

            {/* Main Section */}
            <div className="about-sections">
                {/* LEFT SIDE - Image */}
                <div className="about-left">
                    <img src={profile_img} alt="profile" className="profile-img" />
                </div>

                {/* RIGHT SIDE - About Text + Achievements */}
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a frontend developer with a passion for creating user-friendly and visually appealing websites.
                            I have experience in designing and developing responsive websites, as well as front-end development
                            using HTML, CSS, ReactJS, AngularJS, NextJS, and JavaScript.
                        </p>
                        <p>
                            My goal is to build products that combine clean design, efficient code, and great user experience.
                        </p>
                    </div>

                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>1+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>50+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
