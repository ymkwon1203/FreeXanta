import React, {Component, Fragment} from "react";
import {Row, Col, Container, Spinner} from "reactstrap";
import Timer from "react-compound-timer";
import {FaRegCircle} from "react-icons/fa";
import { GiCircle } from "react-icons/gi";

const ContainerStyle = {
	position: "relative",
	top: "8vh",
	textAlign: "center",
	height: "2rem",
};

const TimerStyle = {
	position: "absolute",
	fontSize: "1.5rem",
	width: '8rem',
	height: '8rem',
	lineHeight: '8rem',
	left: "50%",
	transform: "translate(-50%, 0%)",
	zIndex: "1"
};

const SpinnerStyle = {
	position: "absolute",
	width: '8rem',
	height: '8rem',
	left: "50%",
	transform: "translate(-50%, 0%)",
	top: "-0"

};

const CirCleStyle = {
	position: "absolute",
	top:"0",
	left: "50%",
	transform: "translate(-50%, 0%)",
}

class TimerView extends Component {

	constructor() {
		super();

		this.state = {
			timerState: "init",
			initialTime: 60000
		};
	};

	onResetFunc = (reset) => () => {
		console.log('My own function');
		reset()
	};
	render() {
		return (
			<Container style={ContainerStyle}>
				<Timer
					formatValue={value => `${value < 10 ? `0${value}` : value}`}
					initialTime={1000 * 60}
					direction="backward"
					startImmediately={false}
					onStart={() => {console.log('onStart hook')}}
					onResume={() => console.log('onResume hook')}
					onPause={() => console.log('onPause hook')}
					onStop={() => console.log('onStop hook')}
					onReset={() => console.log('onReset hook')}
					checkpoints={[
						{
							time: 0,
							callback: () => {
								alert('Checkpoint A');
								this.onResetFunc(this.reset);

							},
						},
					]}
				>
					{({start, resume, pause, stop, reset, timerState}) => {
						console.log(timerState);
						return (
							<Fragment>
								<div style={TimerStyle} onClick={() => {
									console.log(timerState);
									start();
									console.log(start);
								}
								}>
									{/* <Timer.Days /> days */}
									<Timer.Hours/>:{/*hours*/}
									<Timer.Minutes/>:{/*minutes*/}
									<Timer.Seconds/>{/*seconds*/}
									{/* <Timer.Milliseconds /> milliseconds */}
								</div>
								{/*<div>{timerState}</div>*/}
								{/*<br/>*/}
								{/*<div>*/}
								{/*	<button onClick={start}>Start</button>*/}
								{/*	<button onClick={pause}>Pause</button>*/}
								{/*	<button onClick={resume}>Resume</button>*/}
								{/*	<button onClick={stop}>Stop</button>*/}
								{/*	<button onClick={reset}>Reset</button>*/}
								{/*</div>*/}
							</Fragment>
						)
					}}
				</Timer>
				<div style={SpinnerStyle}>
					<Spinner color="primary" style={{width: "8rem", height: "8rem"}} />
				</div>
				<div  style={CirCleStyle} >
				<GiCircle size={"8rem"}/>
				</div>
			</Container>

		)
	}
}

export default TimerView;