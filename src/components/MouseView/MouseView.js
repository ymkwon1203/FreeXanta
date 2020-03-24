import React, { Component } from 'react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import Container from 'reactstrap/lib/Container';

const ContainerStyle = {
    position: "relative",
    top: "30vh"
};

const touchPadStyle = {
    width: "100%",
    height: "50vh",
    backgroundColor: "gray",
    borderRadius: ".50rem",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    //top: "30vh",
    position: "relative"
};

const swipeMsgStyle = {
    position: "relative",
    top: "1vh",
    height: "1rem",
    textAlign: "center"
};
class MouseView extends Component {
    constructor(props) {
        super();
        this.state = {
            log: ""
        };
        this.onMouseCursorMove = props.cmdFunc.onMouseCursorMove;
    }
    swiping = event => {
        //console.log(event.event.movementX + ":" + event.event.movementY);
        this.setState({
            log: "You Swiping..."
        });
        this.onMouseCursorMove(event.event);
    };
    render() {
        return (
            <Container style={ContainerStyle}>
                <div
                    onDrag={() => console.log("haha")}
                    onClick={() => console.log("click")}
                    onMouseDown={() => console.log("mousedown")}
                    onMouseUp={() => console.log("mouseup")}
                    onTouchStart={() => {
                        console.log("touch start");
                        this.setState({
                            touchlog: "touch start"
                        });
                    }}
                    onTouchMove={() => {
                        console.log("touch move");
                        this.setState({
                            touchlog: "touch move"
                        });
                    }}
                    onTouchEnd={() => {
                        console.log("touch end");
                        this.setState({
                            touchlog: "touch end"
                        });
                    }}
                >
                    <Swipeable
                        style={touchPadStyle}
                        onSwiping={this.swiping}
                        onSwiped={() => console.log("swiped!!")}
                        trackMouse={true}
                        trackTouch={true}
                        delta={0}
                        onClick={this.draging}
                    />

                    <div style={swipeMsgStyle}>{this.state.log}</div>
                    <div style={swipeMsgStyle}>{this.state.touchlog}</div>
                </div>
            </Container>
        );
    }
}

export default MouseView;