import React from 'react';
import { FaSquare } from "react-icons/fa";

const handleMouseMove = (event) => {
    console.log(event.touches);
    console.log(event.pageX, event.pageY);
};

const MouseBtn = (props) => {

    return(
         <FaSquare size={300} onTouchMove={handleMouseMove}/>
    );
};

export default MouseBtn;