import React from "react";

function Footer() {
  return (
    <footer className="footer-div">
      <div className="footer-content">
        Made by Thiago Cabral {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;