import React, { useContext } from "react";
import { LanguageContext } from "../../App";

function Footer() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <footer className="footer-div">
      <div className="footer-content">
        {translations[language].footer.madeBy} Thiago Cabral {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
