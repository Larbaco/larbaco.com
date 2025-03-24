// Card.js
import React from "react";
import CardInfo from "./CardInfo";
import PropTypes from "prop-types";

function Card({ item, onClick }) {
  return (
    <div className="d-inline-block p-card" onClick={() => onClick(item)}>
      <img className="p-card-image" src={item.imgSrc} alt={item.title} />
      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      )}
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    link: PropTypes.string,
    selected: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;