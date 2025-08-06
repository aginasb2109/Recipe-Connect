import React from 'react';
import "../assets/Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <span>Built with ❤️ by <strong>Aginas B</strong></span>
      <div className="footer-links">
        <a
          href="https://github.com/aginasb2109"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aginas-b-66b804232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
