import React, {Component} from 'react';
import {FaSquare, FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleUp} from "react-icons/fa";
import {useSwipeable, Swipeable} from 'react-swipeable'
import {Row, Col, Container} from "reactstrap";
import * as Define from "../Define/Define";

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

const arrowSize = 50;

const arrowUpStyle = {
	position: "absolute",
	top: "0%",
	left: "50%",
	transform: "translate(-50%, 10%)",
};

const arrowDownStyle = {
	position: "absolute",
	bottom: '0%',
	left: "50%",
	transform: "translate(-50%, -10%)",
};

const arrowLeftStyle = {
	position: "absolute",
	left: "6%",
};

const arrowRightStyle = {
	position: "absolute",
	right: "6%",
};

const textStyle = {
	fontSize: "1rem"
};

const swipeMsgStyle = {
	position: "relative",
	top: "1vh",
	height: "1rem",
	textAlign: "center"
};

class TouchView extends Component {

	constructor() {
		super();
		this.state = {
			log: "",
			show: true,
			slideShow: false,
		};
	}

	swipingLeft = (e, absX) => {
		console.log("You Swiped Left...", e, absX);
		this.setState({
			...this.state,
			log: "You Swiped Left..."
		});
		this.props.cmdFunc.onSendKeyCMD(Define.CMD_PGUP);
	};

	swipedRight = (e, absX) => {
		console.log("You Swiped Right...", e, absX);
		this.setState({
			...this.state,
			log: "You Swiped Right..."
		});
		this.props.cmdFunc.onSendKeyCMD(Define.CMD_PGDN);
	};

	swipedUp = (e, deltaY, isFlick) => {
		console.log("You Swiped Up...", e, deltaY, isFlick);

		if(this.state.sildeshow) {
			this.props.cmdFunc.onSendKeyCMD(Define.CMD_ESC);
		} else {
			this.props.cmdFunc.onSendKeyCMD(Define.CMD_F5);
		}

		this.setState({
			...this.state,
			log: "You Swiped Up...",
			sildeshow: !this.state.sildeshow
		});
	};

	swipedDown = (e, deltaY, isFlick) => {
		console.log("You Swiped Down...", e, deltaY, isFlick);
		console.log("this.show", this.show);
		if(this.state.show) {
			this.props.cmdFunc.onBlackScreenCMD(Define.CMD_HIDE);
		} else {
			this.props.cmdFunc.onBlackScreenCMD(Define.CMD_SHOW);
		}
		this.setState({
			...this.state,
			log: "You Swiped Down...",
			show: !this.state.show
		});

	};


	render() {
		return (
			/*<Container style={{top: "30vh", position: "relative"}}>*/
			<Container style={ContainerStyle}>
			{/*<Row className="justify-content-center">*/}

				<Swipeable style={touchPadStyle}
				           onSwipedLeft={this.swipingLeft}
				           onSwipedRight={this.swipedRight}
				           onSwipedUp={this.swipedUp}
				           onSwipedDown={this.swipedDown}
				>
					<div style={arrowUpStyle} >
						<div>Slide Show</div>
						<FaAngleDoubleUp size={arrowSize}/>
					</div>
					<div style={arrowDownStyle}>
						<FaAngleDoubleDown  size={arrowSize}/>
						<div>Black Out</div>
					</div>
					<div style={arrowLeftStyle}>
						<div>Prev</div>
						<FaAngleDoubleLeft  size={arrowSize}/>
					</div>
					<div style={arrowRightStyle} >
						<div>Next</div>
						<FaAngleDoubleRight size={arrowSize}/>
					</div>
				</Swipeable>

			{/*</Row>*/}

				<div style={swipeMsgStyle}>
				{this.state.log}
				</div>

			</Container>

		);
	}
}

export default TouchView;