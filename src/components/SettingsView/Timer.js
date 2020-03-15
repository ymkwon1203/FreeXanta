import React, {useState} from 'react';
import {
	ListGroup,
	ListGroupItem,
	InputGroup, Input
} from "reactstrap";
import Switch from "react-switch";
import TimeField from 'react-simple-timefield';

const ListGroupItemtyle = {
	display: "flex",
	flexDirection: "row",
	//margin: "auto 0",
	alignItems: "center"
};

const ItemNameStyle = {
	position: "relative",
	//left: "10%"
};

const SwitchMode = (props) => {

	const { checked, setChecked } = props;

	return (
		<>
			<div style={{marginLeft: "auto"}}>
				<div>{checked === true && "Forward" }</div>
				<div>{checked === false && "Backward" }</div>
				<Switch
					checked={checked}
					onChange={setChecked}
					onColor="#86d3ff"
					onHandleColor="#2693e6"
					handleDiameter={30}
					uncheckedIcon={false}
					checkedIcon={false}
					boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
					height={20}
					width={48}
					className="react-switch"
					id="material-switch"
				/>
			</div>
		</>
	);
};

const SetTimer = (props) => {
	const { time, setTimer } = props;

	const onTimeChange = (event, time) => {
		setTimer(time);
		console.log("time",time);
	};

	return (
		<TimeField style={{width: "47px"}} value={time} onChange={onTimeChange} />
	);
};

const Timer = (props) => {
	//const [checked, setChecked] = useState(false);
	//const [time, setTimer] = useState('00:30');

	const {setting_timerDirection, setting_initialTime,	onChangeInitalTime,	onChangeTimerDirection} = props;
	const checked = setting_timerDirection;
	const setChecked = onChangeTimerDirection;
	const time = setting_initialTime;
	const setTimer = onChangeInitalTime;

	return(
		<ListGroup>
			<ListGroupItem style={ListGroupItemtyle} tag="a" href="#" action>
				<div style={ItemNameStyle}>Direction</div>
				<SwitchMode checked={checked} setChecked={setChecked}/>
			</ListGroupItem>
			{checked === false &&
				<ListGroupItem style={ListGroupItemtyle} tag="a" href="#" action>
					<div style={ItemNameStyle}>Time</div>
					<div style={{marginLeft: "auto"}}>
						<SetTimer time={time} setTimer={setTimer}/>
					</div>
				</ListGroupItem>
			}
		</ListGroup>
	)
};

export default Timer;