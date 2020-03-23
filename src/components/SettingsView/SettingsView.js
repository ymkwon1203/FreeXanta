import React, {Component, useState} from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";
import {FiChevronsLeft} from "react-icons/fi";
import {TiArrowBackOutline} from "react-icons/ti";

import {
	Row,
	Col,
	Container,
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	ListGroup,
	ListGroupItem,
	Input,
} from "reactstrap";

import Mode from "./Mode";
import Timer from "./Timer";
import IPAddress from "./IPAddress";
import { SET_MODE, SET_IP, SET_MAIN, SET_TIMER} from "../Define/Define";

const SettingMenu = (props) => {
	const {listView, setViewList} = props;

	return (
		<ListGroup>
			<ListGroupItem onClick={() => setViewList(SET_MODE)} tag="a" href="#" action>
				<div style={{float: "left"}}>Mode</div>
				<FaAngleRight style={{float: "right"}} size={"30"}/>
			</ListGroupItem>
			<ListGroupItem onClick={() => setViewList(SET_IP)} tag="a" href="#" action>
				<div style={{float: "left"}}>IP Address</div>
				<FaAngleRight style={{float: "right"}} size={"30"}/>
			</ListGroupItem>
			<ListGroupItem onClick={() => setViewList(SET_TIMER)} tag="a" href="#" action>
				<div style={{float: "left"}}>Timer</div>
				<FaAngleRight style={{float: "right"}} size={"30"}/>
			</ListGroupItem>
		</ListGroup>
	)
};

const SettingsView = (props) => {
	const {settingValue, settingFunc, connFunc} = props;

	console.log("settingValue", settingValue);
	console.log("settingsFunc", settingFunc);
	const {
		mode,
		settings_view,
		setting_initMode,
		setting_timerDirection,
		setting_initialTime,
		setting_ipAddress
	} = settingValue;

	const {
		onChangeMode,
		onChangeSettingView,
		onChangeInitMode,
		onChangeInitalTime,
		onChangeTimerDirection,
		onChangeIpAddress
	} = settingFunc;

	//const [viewList, setViewList] = useState(SET_MAIN);
	const viewList = settings_view;
	const setViewList = onChangeSettingView;

	const OnBack = () => {
		if(viewList !== SET_MAIN) {
			setViewList(SET_MAIN);
		}
	};

	let menuName = null;
	if(viewList === SET_MAIN) {
		menuName = "Settings";
	} else if(viewList === SET_MODE) {
		menuName = "Gesture";
	} else if(viewList === SET_IP) {
		menuName = "IP Address";
	} else if(viewList === SET_TIMER) {
		menuName = "Timer";
	}

	return(
		<Container style={{position: "relative", top: "5%"}}>
			<div
				onClick={() => OnBack()}
				style={{height: "6vh", fontSize: "1.5rem", display: "flex", alignItems: "center", backgroundColor: "darkgray", borderRadius: ".30rem"}}
			>
				{menuName !== "Settings" && <TiArrowBackOutline size={"25"}/>}
				<div style={{position: "relative", left: "3%"}}>{menuName}</div>
			</div>
			{
				viewList === SET_MAIN &&
				<SettingMenu viewList={viewList} setViewList={setViewList} />
			}
			{
				viewList === SET_MODE &&
				<Mode setting_initMode={setting_initMode} onChangeInitMode={onChangeInitMode} />
			}
			{
				viewList === SET_TIMER &&
				<Timer
					setting_timerDirection={setting_timerDirection}
					setting_initialTime={setting_initialTime}
					onChangeInitalTime ={onChangeInitalTime}
					onChangeTimerDirection={onChangeTimerDirection}
				/>
			}
			{
				viewList === SET_IP &&
				<IPAddress settings_ipAddress={setting_ipAddress} onChangeIpAddress={onChangeIpAddress} />
			}
		</Container>
	);
};

export default SettingsView;