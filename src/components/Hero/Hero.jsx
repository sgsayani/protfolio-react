import React from 'react'
import './Hero.css'
import profile_img from '../../assets/SG.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-profile-img'>
                <img src={profile_img} alt="" />
            </div>
            <h1><span>I'm Sayani Ghatak, </span>frontend developer at TCS</h1>
            <p>I am a frontend developer with a passion for creating user-friendly and visually appealing websites. I have experience in designing and developing responsive websites, as well as front-end development using HTML, CSS, ReactJS, AngularJs, NextJs and JavaScript. I am constantly learning and improving my skills to stay at the forefront of web development.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">
                    My resume
                </div>
            </div>
        </div>
    )
}

export default Hero
