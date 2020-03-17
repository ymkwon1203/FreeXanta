import React, {Component} from 'react';
import {FaSquare, FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleUp} from "react-icons/fa";
import {useSwipeable, Swipeable} from 'react-swipeable'
import {Row, Col, Container} from "reactstrap";

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

class GestureView extends Component {

	constructor() {
		super();
		this.state = {
			log: ""
		};
	}

	swipingLeft = (e, absX) => {
		console.log("You Swiped Left...", e, absX);
		this.setState({
			log: "You Swiped Left..."
		});
	};

	swipedRight = (e, absX) => {
		console.log("You Swiped Right...", e, absX);
		this.setState({
			log: "You Swiped Right..."
		});
	};

	swipedUp = (e, deltaY, isFlick) => {
		console.log("You Swiped Up...", e, deltaY, isFlick);
		this.setState({
			log: "You Swiped Up..."
		});
	};

	swipedDown = (e, deltaY, isFlick) => {
		console.log("You Swiped Down...", e, deltaY, isFlick);
		this.setState({
			log: "You Swiped Down..."
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
						<div>Black Out</div>
						<FaAngleDoubleUp size={arrowSize}/>
					</div>
					<div style={arrowDownStyle}>
						<FaAngleDoubleDown  size={arrowSize}/>
						<div>Show</div>
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

export default GestureView;