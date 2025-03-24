import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  });

  return (
    <animated.div className="pt-1 p-card-info"  style={style}>
      <p className="p-card-title">{props.title}</p>
      <p className="p-card-subtitle">{props.subTitle}</p>
      <a  className="p-card-link" href={props.link} target="_blank" rel="noopener noreferrer">
        More
      </a>
    </animated.div>
  );
}
export default CardInfo;
