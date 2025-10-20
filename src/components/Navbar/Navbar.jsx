import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const isProjectsPage = location.pathname === "/projects";

  const handleNavigation = (section) => {
    setMenu(section);
    if (isProjectsPage) {
      // if currently on /projects, navigate to home page
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(`#${section}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <p onClick={() => handleNavigation("home")}>Sayani Ghatak</p>
        <img src={menu_open} onClick={openMenu} alt="menu" className="nav-mob-open" />
      </div>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="close" className="nav-mob-close" />

        <li>
          {!isProjectsPage ? (
            <AnchorLink
              className={`anchor-link ${menu === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => setMenu("home")}
            >
              Home
            </AnchorLink>
          ) : (
            <button
              className={`anchor-link ${menu === "home" ? "active" : ""}`}
              onClick={() => handleNavigation("home")}
            >
              Home
            </button>
          )}
        </li>

        <li>
          {!isProjectsPage ? (
            <AnchorLink
              className={`anchor-link ${menu === "about" ? "active" : ""}`}
              offset={50}
              href="#about"
              onClick={() => setMenu("about")}
            >
              About
            </AnchorLink>
          ) : (
            <button
              className={`anchor-link ${menu === "about" ? "active" : ""}`}
              onClick={() => handleNavigation("about")}
            >
              About
            </button>
          )}
        </li>

        <li>
          {!isProjectsPage ? (
            <AnchorLink
              className={`anchor-link ${menu === "experience" ? "active" : ""}`}
              offset={50}
              href="#experience"
              onClick={() => setMenu("experience")}
            >
              Experience
            </AnchorLink>
          ) : (
            <button
              className={`anchor-link ${menu === "experience" ? "active" : ""}`}
              onClick={() => handleNavigation("experience")}
            >
              Experience
            </button>
          )}
        </li>

        <li>
          {!isProjectsPage ? (
            <AnchorLink
              className={`anchor-link ${menu === "projects" ? "active" : ""}`}
              offset={50}
              href="#work"
              onClick={() => setMenu("projects")}
            >
              Projects
            </AnchorLink>
          ) : (
            <button
              className={`anchor-link ${menu === "projects" ? "active" : ""}`}
              onClick={() => handleNavigation("work")}
            >
              Projects
            </button>
          )}
        </li>

        <li>
          {!isProjectsPage ? (
            <AnchorLink
              className={`anchor-link ${menu === "contact" ? "active" : ""}`}
              offset={50}
              href="#contact"
              onClick={() => setMenu("contact")}
            >
              Contact
            </AnchorLink>
          ) : (
            <button
              className={`anchor-link ${menu === "contact" ? "active" : ""}`}
              onClick={() => handleNavigation("contact")}
            >
              Contact
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
