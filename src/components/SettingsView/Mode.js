import React, {useState} from 'react';
import {
	ListGroup,
	ListGroupItem,
	InputGroup, Input
} from "reactstrap";

const ListGroupItemtyle = {
	display: "flex",
	flexDirection: "row",
	margin: "auto 0",
	alignItems: "center"
};

const ItemNameStyle = {
	position: "relative",
	left: "10%"
};

const Mode = (props) => {

	//const [check, setCheck] = useState("Gesture");
	const { setting_initMode, onChangeInitMode } = props;
	const check = setting_initMode;
	const setCheck = onChangeInitMode;

	const onSelect = (value) => {
		setCheck(value);
	};

	return(
		<ListGroup>
			<ListGroupItem onClick={() => onSelect("Gesture")} style={ListGroupItemtyle} tag="a" href="#" action>
				<Input
					value={"Gesture"}
					addon type="radio"
					aria-label=""
					checked={check === 'Gesture'}
					onChange={(e) => setCheck(e.target.value)}
				/>
				<div style={ItemNameStyle}>Gesture</div>
			</ListGroupItem>
			<ListGroupItem onClick={() => onSelect("Click")}  style={ListGroupItemtyle} tag="a" href="#" action>
				<Input
					value={"Click"}
					addon type="radio"
					aria-label=""
					checked={check === 'Click'}
					onChange={(e) => setCheck(e.target.value)}
				/>
				<div style={ItemNameStyle}>Button</div>
			</ListGroupItem>
			<ListGroupItem onClick={() => onSelect("Mouse")}  style={ListGroupItemtyle} tag="a" href="#" action>
				<Input
					value={"Mouse"}
					addon type="radio"
					aria-label=""
					checked={check === 'Mouse'}
					onChange={(e) => setCheck(e.target.value)}
				/>
				<div style={ItemNameStyle}>Mouse</div>
			</ListGroupItem>
		</ListGroup>
	)
};

export default Mode;