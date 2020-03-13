import React, {Component, Fragment} from "react";
import {Row, Col, Container, Spinner} from "reactstrap";
import Timer from "react-compound-timer";
import {FaCircle} from "react-icons/fa";
import { GiCircle } from "react-icons/gi";
import {MdRefresh} from "react-icons/md";

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

const ResetStyle = {
	position: "absolute",
	top : "319%",
	left: "64%"
};

const ResetAction = (props) => {

	const { reset, getTime } = props;

	console.log("getTime()", getTime());
	if(getTime() < 0) {
		reset();
	}
	return <div></div>;
}

class TimerView extends Component {

	constructor() {
		super();
		this.state = {
			timerState: "init",
			initialTime: 60000,
			resetFunc : null,
		};
	};

	test = (reset, getTime) => {
		console.log("getTime()", getTime());
		if(getTime() <= 0) {
			reset();
		}

		return null;
	}

	resetAction = (el) => {
		el.click();
	}



	render() {
		return (
			<Container style={ContainerStyle}>
				<Timer
					formatValue={value => `${value < 10 ? `0${value}` : value}`}
					initialTime={1000 * 3}
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
								console.log(this.timer);
								//this.resetAction();

							},
						},
					]}
				>
					{({start, resume, pause, stop, reset, timerState, getTimerState, getTime}) => {

						console.log("getTimerState()", getTimerState());

						//console.log("getTime()", getTime());
						if(getTime() < 0) {

						}

						console.log(this.props);

						return (
							<Fragment>
								<div style={TimerStyle} onClick={() => {

									/*
										export const INITED = 'INITED';
										export const PLAYING = 'PLAYING';
										export const PAUSED = 'PAUSED';
										export const STOPPED = 'STOPPED';
									*/
									const nowState = getTimerState();
									const run = nowState === 'INITED' || nowState === 'STOPPED' ? true : false;

									console.log(nowState);
									console.log(run);

									if(run) {
										start();
									} else {
										stop();
									}
								}

								
								}>
									{/* <Timer.Days /> days */}
									<Timer.Hours/>:{/*hours*/}
									<Timer.Minutes/>:{/*minutes*/}
									<Timer.Seconds/>{/*seconds*/}
									{/* <Timer.Milliseconds /> milliseconds */}
									{/*{this.test(reset, getTime)}*/}


								</div>
								<div style={ResetStyle} onClick={()=> { stop(); reset(); } }  ref={this.resetAction}>
									<MdRefresh size={"1.5rem"}></MdRefresh><span>Reset</span>
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