import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const NavLink = ({ to, name, children }) => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <Link to={to} className="nav-link">
      {children || translations[language].menu[name]}
    </Link>
  );
};

export default NavLink;
