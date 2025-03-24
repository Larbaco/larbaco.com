import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import PropTypes from 'prop-types';

const NavLink = ({ to, name, children }) => {
  const { language, translations } = useContext(LanguageContext);
  
  return (
    <Link to={to} className="nav-link">
      {children || translations[language].menu[name]}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default NavLink;