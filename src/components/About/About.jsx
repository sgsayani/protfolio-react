import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/SG.png'

const About = () => {
    const highlight = { color: "#f16357", fontWeight: 600 };
    const handleRedirect = () => {
    window.open("https://github.com/sgsayani", "_blank");
  };
  const handleRedirectToAchievements = () => {
    window.open("https://docs.google.com/document/d/1C-K5KPU28cxPmUvpTumrakMgxlsQQFkiRjWR16Qxhjw/edit?usp=sharing", "_blank");
  };

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
                            I’m a <span style={highlight}>Frontend Developer</span> passionate about building responsive, user-focused web applications with clean design and efficient code.
                            I specialize in{" "}
                            <span style={highlight}>HTML</span>,{" "}
                            <span style={highlight}>CSS</span>,{" "}
                            <span style={highlight}>JavaScript</span>,{" "}
                            <span style={highlight}>TypeScript</span>,{" "}
                            <span style={highlight}>React.js</span>,{" "}
                            <span style={highlight}>Next.js</span>,{" "}
                            <span style={highlight}>AngularJS</span>, and have experience with{" "}
                            <span style={highlight}>Express.js</span> and{" "}
                            <span style={highlight}>MongoDB</span> for full-stack development.
                            As an <span style={highlight}>AI enthusiast</span>, I’m expanding my skills in AI-driven full-stack solutions to create innovative, impactful digital experiences.
                        </p>

                        <p>
                            My goal is to build products that combine{" "}
                            <span style={highlight}>clean design</span>,{" "}
                            <span style={highlight}>efficient code</span>, and{" "}
                            <span style={highlight}>great user experience</span>.
                        </p>
                    </div>

                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>1+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement" onClick={handleRedirect} >
                            <h1>30+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement" onClick={handleRedirectToAchievements} >
                            <h1>10+</h1>
                            <p>ACHIEVEMENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
