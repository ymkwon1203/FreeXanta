import React, {Component} from "react";
import { FiWifiOff, FiWifi } from "react-icons/fi";
import { FaHandPointUp } from "react-icons/fa";
import { MdSettings, MdMouse, MdTouchApp, MdGamepad } from "react-icons/md";
import {Row} from "reactstrap";

const topBarStyle = {
	top: "1vh",
	//width: "100%",
	height: "2.5rem",
	position: "relative",
	textAlign: "center",
	//display: "flex",
	//alignItems: "center",
};

const settingBtnStyle = {
	position: "absolute",
	left: "5%",
	transform: "translate(-5%, 0%)",
};
const connectBtnStyle = {
	position: "absolute",
	left: "28%",
	transform: "translate(-28%, 0%)",
};
const touchPadBtnStyle = {
	position: "absolute",
	left: "50%",
	transform: "translate(-50%, 0%)",
};
const keyPadBtnStyle = {
	position: "absolute",
	left: "72%",
	transform: "translate(-72%, 0%)",
};

const mousePadBtnStyle = {
	position: "absolute",
	left: "95%",
	transform: "translate(-95%, 0%)",
};



const iconStyle = "2.5rem";

class TobBar extends Component {


	render() {
		return (
			<Row className="justify-content-center" style={topBarStyle} >
				<MdSettings style={settingBtnStyle} size={iconStyle}/>
				{/*<FiWifiOff size={iconStyle} />*/}
				<FiWifi style={connectBtnStyle}  size={iconStyle} />
				<MdTouchApp style={touchPadBtnStyle}  size={iconStyle} />
				<MdGamepad style={keyPadBtnStyle}  size={iconStyle} />
				<MdMouse style={mousePadBtnStyle}  size={iconStyle} />
			</Row>
		);
	};

}

export default TobBar;