import React from "react";

function Hero({ children }) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
}

export default Hero;