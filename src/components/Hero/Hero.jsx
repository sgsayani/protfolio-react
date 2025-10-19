import React from 'react'
import './Hero.css'
import profile_img from '../../assets/SG.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            {/* <div className="hero-bg-icons">
                <img src={require('../../assets/coding_icon.png')} alt="code" className="icon icon1" />
                <img src={require('../../assets/coding_icon.png')} alt="code" className="icon icon2" />
                <img src={require('../../assets/coding_icon.png')} alt="code" className="icon icon3" />
            </div> */}
            <div className="hero-left">
                <h1 className="hero-line hero-hello">Hello<span className="orange-dot">.</span></h1>
                <h1 className="hero-line hero-name">I'm Sayani</h1>
                <h1 className="hero-line hero-role">Software developer</h1>

                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#work'>See Projects</AnchorLink>
                    </div>
                    <div className="hero-resume">My resume</div>
                </div>
            </div>
            <div className='hero-profile-img'>
                <div className="hero-img-circle"></div>
                <img src={profile_img} alt="Sayani Ghatak" />
            </div>
        </div>
    )
}

export default Hero
