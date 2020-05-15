import React from "react";
import "./styles.css";

import Hero from "../../components/hero";
export default function resume(props) {
  return (
    <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}
