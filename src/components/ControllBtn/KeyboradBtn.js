import React from "react";
import { FaKeyboard } from "react-icons/fa";

const KeyboradBtn = (props) => {

  const onKeyboard = () => {
    props.socket.emit('send', { name: 'keyboard' });
  };

  return <FaKeyboard size="30" onClick={onKeyboard}/>;
};

export default KeyboradBtn;
