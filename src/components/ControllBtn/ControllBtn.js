import React, { Component } from 'react';
import KeyboardBtn from './KeyboradBtn';
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import ShowToggleBtn from "./ShowToggleBtn";

class ControllBtn extends Component {

    render() {
        return (
        <div className={"controllArea"}>
            <KeyboardBtn/>
            <NextBtn/>
            <PrevBtn/>
            <ShowToggleBtn/>
        </div>
        );

    }
}

export default ControllBtn;