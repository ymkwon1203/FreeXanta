import React, {Component, Fragment} from "react";
import {Row, Col, Container, Spinner} from "reactstrap";
import Timer from "react-compound-timer";
import {FaRegCircle} from "react-icons/fa";
import { GiCircle } from "react-icons/gi";

const ContainerStyle = {
	position: "relative",
	top: "8vh",
	textAlign: "center",
	height: "2rem"
};

const TimerStyle = {
	position: "relative",
	top: "-260%",
	fontSize: "1.5rem"
};

class TimerView extends Component {

	onResetFunc = (reset) => () => {
		console.log('My own function');
		reset()
	};
	render() {
		return (
			<Container style={ContainerStyle}>
				<Spinner color="primary" style={{width: '8rem', height: '8rem'}} />
				{/*<GiCircle size={138} style={{position: "relative", top:"1.5vh"}}/>*/}
				<Timer
					formatValue={value => `${value < 10 ? `0${value}` : value}`}
					initialTime={1000 * 1}
					direction="backward"
					startImmediately={false}
					onStart={() => console.log('onStart hook')}
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
					{({start, resume, pause, stop, reset, timerState}) => (
						<Fragment>
							<div style={TimerStyle} onClick={() => {
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
					)}
				</Timer>


			</Container>
		)
	}
}

export default TimerView;