import React, {Component} from 'react';
import {useSwipeable, Swipeable} from 'react-swipeable'
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
    constructor() {
		super();
		this.state = {
			log: ""
		};
	}
	swiping = (e, deltaY, isFlick) => {
		console.log("You Swiping...", e, deltaY, isFlick);
		this.setState({
			log: "You Swiping..."
		});
	};
    render(){
        return (
            <Container style={ContainerStyle}>
                <div>haha</div>
				<Swipeable style={touchPadStyle}
                           onSwiping = {this.swiping}
                           trackMouse = {true}
                           trackTouch = {true}
                           delta = {0}
				>

				</Swipeable>

                <div style={swipeMsgStyle}>
				{this.state.log}
				</div>
            </Container>
        );
    }
}

export default MouseView;