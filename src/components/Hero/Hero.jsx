import React from "react";
import "./Hero.css";
import profile_img from "../../assets/SG.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id="home" className="hero">
            {/* Floating coding texts */}
            <div className="floating-text icon1">{`</>`}</div>
            <div className="floating-text icon2">{`{}`}</div>
            <div className="floating-text icon3">⚡</div>
            <div className="floating-text icon4">💻</div>
            <div className="floating-text icon6">{`</>`}</div>
            <div className="floating-text icon7">{`{}`}</div>

            <div className="hero-left">
                <h1 className="hero-line hero-hello fade-in-up">
                    Hello<span className="orange-dot">.</span>
                </h1>
                <h1 className="hero-line hero-name fade-in-up delay-1">I'm Sayani</h1>
                <h1 className="hero-line hero-role fade-in-up delay-2">
                    Software Developer
                </h1>

                <div className="hero-action fade-in-up delay-3">
                    <div className="hero-connect">
                        <AnchorLink className="anchor-link btn" offset={50} href="#work">
                            See Projects
                        </AnchorLink>
                    </div>
                    <a
                        className="hero-resume btn-outline"

                        download
                    >
                        Resume
                    </a>
                </div>
            </div>

            <div className="hero-profile-img fade-in-up delay-4">
                <div className="glow-circle"></div>
                <div className="glow-circle second"></div>
                <img src={profile_img} alt="Sayani Ghatak" className="floating-img" />
            </div>
        </div>
    );
};

export default Hero;
