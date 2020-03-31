import React, {Component} from "react";
import "./ClickView.css"
import {Container} from "reactstrap";

import range from 'lodash.range';
import ReactDOM from 'react-dom';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import 'font-awesome/css/font-awesome.min.css';
import * as Define from "../Define/Define";
//Constants

// Diameter of the main button in pixels
const MAIN_BUTTON_DIAM = 100;
const CHILD_BUTTON_DIAM = 48;
// The number of child buttons that fly out from the main button
const NUM_CHILDREN = 5;
// Hard code the position values of the mainButton

//left
const M_L_X = 70;
//right
const M_R_X = 450;

const M_Y = 150;


const SPRING_CONFIG = [400, 28];

// How far away from the main button does the child buttons go
const FLY_OUT_RADIUS = 130,
    SEPARATION_ANGLE = 40, //degrees
    FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE, //degrees
    BASE_ANGLE_RIGHT = ((360 - FAN_ANGLE)/2), // degrees
    BASE_ANGLE_LEFT = ((0 - FAN_ANGLE)/2); // degrees

// Names of icons for each button retreived from fontAwesome, we'll add a little extra just in case
// the NUM_CHILDREN is changed to a bigger value
let childButtonIcons = ['play', 'pause', 'backward', 'forward', 'stop'];

function toRadians(degrees) {
    return degrees * 0.0174533;
}
function getXPosition(isRight) {
    if(isRight)
    {
        return M_R_X;
    }
    return M_L_X;
}
function getMainCircleColor(isRight) {
    if(isRight)
    {
        return "#f90";
    }
    return "green";
}

function finalChildDeltaPositions(index, isRight) {
     let angle = (isRight) ? (BASE_ANGLE_RIGHT + (index* SEPARATION_ANGLE)) : (BASE_ANGLE_LEFT + (index* SEPARATION_ANGLE)) ;
 return {
        deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM/2),
        deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) + (CHILD_BUTTON_DIAM/2)
    };
}


class ClickView extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isChecked: false,
            childButtons: []
        };

        // Bind this to the functions
        this.ToggleDirection = this.ToggleDirection.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.animateChildButtonsWithDelay = this.animateChildButtonsWithDelay.bind(this);

    };

    componentDidMount() {
        //window.addEventListener('click', this.closeMenu);
        let childButtons = [];
        range(NUM_CHILDREN).forEach(index => {
            childButtons.push(this.renderChildButton(index));
        });

        this.setState({childButtons: childButtons.slice(0)});
    }

    mainButtonStyles() {
        let {isChecked} = this.state;
        return {
            width: MAIN_BUTTON_DIAM,
            height: MAIN_BUTTON_DIAM,
            top: M_Y - (MAIN_BUTTON_DIAM/2),
            left: getXPosition(isChecked) - (MAIN_BUTTON_DIAM/2),
            background: getMainCircleColor(isChecked)
        };
    }

    initialChildButtonStyles() {
        let {isChecked} = this.state;
        return {
            width: CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: spring(M_Y - (CHILD_BUTTON_DIAM/2), SPRING_CONFIG),
            left: spring(getXPosition(isChecked) - (CHILD_BUTTON_DIAM/2), SPRING_CONFIG),
            rotate: spring(-180, SPRING_CONFIG),
            scale: spring(0.5, SPRING_CONFIG)
        };
    }

    finalChildButtonStyles(childIndex) {
        let {isChecked} = this.state;
        let {deltaX, deltaY} = finalChildDeltaPositions(childIndex, isChecked);
        return {
            width: CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: spring(M_Y - deltaY, SPRING_CONFIG),
            left: spring(getXPosition(isChecked) + deltaX, SPRING_CONFIG),
            rotate: spring(0, SPRING_CONFIG),
            scale: spring(1, SPRING_CONFIG)
        };
    }


    toggleMenu(e) {
        e.stopPropagation();
        this.setState({isOpen: !this.state.isOpen});
        this.animateChildButtonsWithDelay();
    }
    ToggleDirection(e) {
        e.stopPropagation();
        this.setState({isChecked: !this.state.isChecked});
        this.animateChildButtonsWithDelay();
        this.closeMenu();
    }

    closeMenu() {
        console.log("closeMenu");
        this.setState({ isOpen: false});
        this.animateChildButtonsWithDelay();
    }
    ChildClick = (index) => {

        if(this.state.isOpen)
        {
            /*let childButtonIcons = ['play', 'pause', 'backward', 'forward', 'stop']*/
            switch(index) {
                case 0: // play
                    console.log("play");
                    alert("play");
                    break;
                case 1: // Pause
                    console.log("Pause");
                    alert("Pause");
                    break;
                case 2: // backward
                    console.log("backward");
                    alert("backward");
                    break;
                case 3: // forward
                    console.log("forward");
                    alert("forward");
                    break;
                case 4: // stop
                    console.log("stop");
                    alert("stop");
                    break;
                default:
                    console.log("index" + index);
                    alert(index);
                    break;
            }
        }
    }

    animateChildButtonsWithDelay() {
        range(NUM_CHILDREN).forEach((index) => {
            let {childButtons} = this.state;
            setTimeout(() => {
                childButtons[NUM_CHILDREN - index - 1]	= this.renderChildButton(NUM_CHILDREN - index - 1);
                this.setState({childButtons: childButtons.slice(0)});
            }, index * 50);
        });
    }

    renderChildButton(index) {
        let {isOpen} = this.state;
        let style = isOpen ? this.finalChildButtonStyles(index) : this.initialChildButtonStyles() ;
        return (
            <Motion style={style} key={index}>
                {({width, height, top, left, rotate, scale}) =>
                    <div
                        className={"child-button "+[index] }
                        style={{
                            width: width,
                            height: height,
                            top: top,
                            left: left,
                            transform: `rotate(${rotate}deg) scale(${scale})`
                        }}
                        onClick={((event)=>{this.ChildClick(index);})}
                    >
                            <i className={"fa fa-" + childButtonIcons[index] + " fa-lg"}></i>
                    </div>
                }
            </Motion>
        );
    }

    render() {
        let {isOpen, childButtons} = this.state;
        let mainButtonRotation = isOpen ? {rotate: spring(0, [300, 30])} : {rotate: spring(-135, [300, 30])};

        return (
            <Container style={{position: "relative", top: "30vh"}}>

                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        className="toggle-switch-checkbox"
                        name="toggleSwitch"
                        id="toggleSwitch"
                        onChange={this.ToggleDirection}
                    />

                    <label className="toggle-switch-label" htmlFor="toggleSwitch">
                        <span className="toggle-switch-inner" />
                        <span className="toggle-switch-switch" />
                    </label>
                </div>
                <div>
                    {childButtons.map( (button, index) => {
                        return childButtons[index];
                    })}
                    <Motion style={mainButtonRotation}>
                        {({rotate}) =>
                            <div
                                className="main-button"
                                style={{...this.mainButtonStyles(), transform: `rotate(${rotate}deg)`}}
                                onClick={this.toggleMenu}>
                                {/*Using fa-close instead of fa-plus because fa-plus doesn't center properly*/}
                                <i className="fa fa-close fa-3x"/>
                            </div>
                        }
                    </Motion>
                </div>

            </Container>

        )
    }

}

export default ClickView;
