import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }



  return (
    <div className='navbar'>
      <div className='logo'>
        <p>Sayani Ghatak</p>
        {/* <img src={logo} alt="" /> */}
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      </div>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li>
          <AnchorLink className={`anchor-link ${menu === "home" ? "active" : ""}`} href='#home' onClick={() => setMenu("home")}> Home </AnchorLink>
        </li>

        <li>
          <AnchorLink className={`anchor-link ${menu === "about" ? "active" : ""}`} offset={50} href='#about' onClick={() => setMenu("about")}> About</AnchorLink>
        </li>

        <li>
          <AnchorLink className={`anchor-link ${menu === "services" ? "active" : ""}`} offset={50} href='#services' onClick={() => setMenu("services")}> Skills</AnchorLink>
        </li>

        <li>
          <AnchorLink
            className={`anchor-link ${menu === "experience" ? "active" : ""}`}
            offset={50}
            href='#work'
            onClick={() => setMenu("experience")}
          >
            Experience
          </AnchorLink>
        </li>

        <li>
          <AnchorLink
            className={`anchor-link ${menu === "projects" ? "active" : ""}`}
            offset={50}
            href='#work'
            onClick={() => setMenu("projects")}
          >
            Projects
          </AnchorLink>
        </li>

        <li>
          <AnchorLink
            className={`anchor-link ${menu === "contact" ? "active" : ""}`}
            offset={50}
            href='#contact'
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

    </div>
  )
}

export default Navbar
