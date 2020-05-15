import React from "react";
import "./styles.css";

import Hero from "../../components/hero";
import Carousel from '../../components/Carousel'
//import Card from '../../components/Card'

export default function home(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}
