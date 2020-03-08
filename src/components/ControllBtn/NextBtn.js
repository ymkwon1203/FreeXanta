import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const NextBtn = (props) => {

  const onNext = () => {
    const str = '{"type":"request", "cmd":"keyboard", "subcmd":"stroke-t1", "data": "{DOWN}"}';
    props.socket.send(str);
  };

  return <FaRegArrowAltCircleRight size="50" onClick={onNext}/>;
};

export default NextBtn;
