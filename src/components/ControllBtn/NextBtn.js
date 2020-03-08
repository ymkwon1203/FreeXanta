import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const NextBtn = (props) => {
  return <FaRegArrowAltCircleRight size="50" onClick={props.onSendCommand}/>;
};

export default NextBtn;
