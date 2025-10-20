import React from "react";
import "./Footer.css";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo / Name */}
        <h2 className="footer-logo">Sayani Ghatak</h2>

        {/* Subtitle */}
        <p className="footer-text">
          Designed with ❤️. All rights reserved for Sayani Ghatak.
        </p>

        {/* Social Icons */}
        <div className="footer-icons">
          <a
            href="mailto:sgsayanighatak@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sayani Ghatak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
