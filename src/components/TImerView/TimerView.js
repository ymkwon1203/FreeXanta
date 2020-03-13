import React, {Component, Fragment} from "react";
import {Row, Col, Container, Spinner} from "reactstrap";
import Timer from "react-compound-timer";
import {GiCircle} from "react-icons/gi";
import {MdRefresh} from "react-icons/md";

export const INITED = 'INITED';
export const PLAYING = 'PLAYING';
export const PAUSED = 'PAUSED';
export const STOPPED = 'STOPPED';

const ContainerStyle = {
	position: "relative",
	top: "8vh",
	textAlign: "center",
	height: "2rem",
};

const TimerStyle = {
	position: "absolute",
	fontSize: "1.3rem",
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
};

const ResetStyle = {
	position: "absolute",
	top : "319%",
	left: "64%"
};

class TimerView extends Component {

	constructor() {
		super();
		this.state = {
			timerState: INITED,
			initialTime: 1000 * 30,
		};
	};

	onChageTimerState = (value) => {

		this.setState({
			...this.state,
			timerState: value
		});

	};

	resetRef = null;

	render() {

		let ViewSpinner = null;

		if(this.state.timerState === PLAYING) {
			ViewSpinner = (
				<div style={SpinnerStyle}>
					<Spinner color="primary" style={{width: "8rem", height: "8rem"}}/>
				</div>
			);
		}

		return (
			<Container style={ContainerStyle}>
				<Timer
					formatValue={value => `${value < 10 ? `0${value}` : value}`}
					initialTime={this.state.initialTime}
					direction="backward"
					startImmediately={false}
					onStart={() => {console.log('onStart hook'); this.onChageTimerState(PLAYING);}}
					onResume={() => {console.log('onResume hook')}}
					onPause={() => {console.log('onPause hook')}}
					onStop={() => {console.log('onStop hook'); this.onChageTimerState(STOPPED);}}
					onReset={() => {console.log('onReset hook')}}
					checkpoints={[
						{
							time: 0,
							callback: () => {
								alert('Times Up');
								this.resetRef.click();
							},
						},
					]}
				>
					{({start, resume, pause, stop, reset, timerState, getTimerState, getTime}) => {
						console.log("getTimerState()", getTimerState());
						return (
							<Fragment>
								<div style={TimerStyle} onClick={() => {
									const nowState = getTimerState();
									const run = nowState === INITED || nowState === STOPPED ? true : false;
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
								<div style={ResetStyle} onClick={()=> { stop(); reset(); } }  ref={ref => this.resetRef = ref}>
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
				{/*<div style={SpinnerStyle}>*/}
				{/*	<Spinner color="primary" style={{width: "8rem", height: "8rem"}} />*/}
				{/*</div>*/}
				{ViewSpinner}
				<div style={CirCleStyle} >
				<GiCircle size={"8rem"}/>
				</div>
			</Container>

		)
	}
}

export default TimerView;