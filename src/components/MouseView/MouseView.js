import React, { Component } from 'react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import Container from 'reactstrap/lib/Container';
import { IoIosDownload } from 'react-icons/io';
import { isPublic } from 'ip';

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
            mouseMode : false
        };
        this.onMouseCursorMove = props.cmdFunc.onMouseCursorMove;
        this.onMouseCursorCMD = props.cmdFunc.onMouseCursorCMD;
        // clickTimer = setTimeout(()=>{
        //     this.onMouseCursorCMD('left-down')
        //     this.onMouseCursorCMD('left-up')
        // }, 300);
        // downAndRightTimer;
        // upTimer;
        // isDown=false;
        // isDrag=false;
        // isUp=false;
        this.clickCnt= 0;
        this.isDoubleClick = false;
        this.isDrag = false;
        this.clickTimer = 0;
        this.rightClickTimer = 0;
    }
    swiping = event => {
        //console.log(event.event.movementX + ":" + event.event.movementY);
        this.setState({
            log: "You Swiping..."
        });
        console.log(event);
        
        //더블클릭후 드래그
        // if(isDown ==true){
        //     clearTimeout(downAndRightTimer);
        //     isDown = false;
        //     clearTimeout(upTimer);
        // }
        this.onMouseCursorMove(event);
        this.isDrag = true;
        clearTimeout(this.rightClickTimer);
    };
    actionDown = () => {
        this.clickCnt += 1;
        if(this.clickCnt >1){
            clearTimeout(this.clickTimer);
            this.onMouseCursorCMD('left-down');
            this.isDoubleClick = true;
        }
        else{
            this.rightClickTimer = setTimeout(()=>{
                this.onMouseCursorCMD('right-down');
                this.onMouseCursorCMD('right-up');
                console.log("action");
            },3000)
        }
        setTimeout(()=>{
            this.clickCnt = 0;
        },200)
        
        // downAndRightTimer = setTimeout(()=>{
        //     this.onMouseCursorCMD('right-down')
        //     this.onMouseCursorCMD('right-up')
        // }, 3000);
        // isDown = true;
    }
    actionUp = () => {
        console.log("action cancel");
        clearTimeout(this.rightClickTimer);
        if(this.isDrag ==false){
            this.clickTimer = setTimeout(()=>{
                    this.onMouseCursorCMD('left-down')
                    this.onMouseCursorCMD('left-up')
                }, 100);
                

        }
        else{
            this.onMouseCursorCMD('left-up') 
            this.isDrag=false;
        }
        
        
        // clearTimeout(downAndRightTimer);
        // upTimer =  setTimeout(()=>{
        //     this.onMouseCursorCMD('left-down')
        //     this.onMouseCursorCMD('left-up')
        // }, 300);
        
    }
    actionClick = ()=> {
        console.log("click")
        // if(this.state.dragModeFlag == false){
        //     clickTimer = setTimeout(()=>{
        //         this.onMouseCursorCMD('left-down')
        //         this.onMouseCursorCMD('left-up')
        //     }, 300);
        // }
        // else{
        //     clearTimeout(clickTimer);
        // }
        
        
        //this.onMouseCursorCMD('left-down');
        //this.onMouseCursorCMD('left-up');
    }
    render() {
        return (
            <Container style={ContainerStyle}>
                <div
                    onDrag={() => console.log("haha")}
                    //onClick={this.actionClick}
                    //onMouseDown={this.actionDown}
                    //onMouseUp={this.actionUp}
                    onTouchStart={this.actionDown}
                    onTouchMove={() => {
                        console.log("touch move");
                        this.setState({
                            touchlog: "touch move"
                        });
                    }}
                    onTouchEnd={this.actionUp}
                >
                    <Swipeable
                        style={touchPadStyle}
                        onSwiping={this.swiping}
                        onSwiped={() => console.log("swiped!!")}
                        trackMouse={true}
                        trackTouch={true}
                        delta={0}
                    />

                    {/* <div style={swipeMsgStyle}>{this.state.log}</div>
                    <div style={swipeMsgStyle}>{this.state.touchlog}</div> */}
                </div>
            </Container>
        );
    }
}

export default MouseView;