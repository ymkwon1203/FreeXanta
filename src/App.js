import React, {Component} from 'react';
import ControllBtn from './components/0_old/ControllBtn/ControllBtn';
import ConnectBtn from "./components/0_old/ConnectBtn/ConnectBtn";
import MouseBtn from "./components/0_old/MouseBtn/MouseBtn";
import Test from "./components/0_old/MouseBtn/Test"

import TopBar from "./components/TopBar/TopBar";
import TimerView from "./components/TimerView/TimerView";
import TouchView from "./components/TouchView/TouchView";
import SettingsView from "./components/SettingsView/SettingsView";
import MouseView from "./components/MouseView/MouseView";
import {Row, Col, Container} from "reactstrap";

import {VIEW_SETTINGS, VIEW_CONNECT, VIEW_GESTURE, VIEW_CLICK, VIEW_MOUSE} from "./components/Define/Define";
import {SET_MODE, SET_IP, SET_MAIN, SET_TIMER} from "./components/Define/Define";
import {VALUE_GESTURE, VALUE_CLICK, VALUE_MOUSE} from "./components/Define/Define";

import "./App.css";

class App extends Component {

	constructor(props) {
		super(props);

		let mode = localStorage.mode;

		let settings_view = localStorage.settings_view;
		if(settings_view === undefined){
			settings_view = SET_MAIN;
			localStorage.settings_view = SET_MAIN;
		} else {
			settings_view = parseInt(localStorage.settings_view);
		}

		let setting_initMode = localStorage.setting_initMode;
		if(setting_initMode === undefined){
			setting_initMode = VALUE_GESTURE;
			localStorage.setting_initMode = VALUE_GESTURE;
			mode = VIEW_GESTURE;
		} else {
			setting_initMode = localStorage.setting_initMode;
			if(setting_initMode === VALUE_GESTURE) {
				mode = VIEW_GESTURE;
			} else if(setting_initMode === VALUE_CLICK) {
				mode = VIEW_CLICK;
			} else if(setting_initMode === VALUE_MOUSE) {
				mode = VIEW_MOUSE;
			}
		}

		let setting_timerDirection = localStorage.setting_timerDirection;
		if(setting_timerDirection === undefined){
			setting_timerDirection = false;
			localStorage.setting_timerDirection = false;
		} else {
			setting_timerDirection = setting_timerDirection === "true";
		}

		let setting_initialTime = localStorage.setting_initialTime;
		if(setting_initialTime === undefined){
			setting_initialTime = "00:30";
			localStorage.setting_initialTime = "00:30";
		} else {
			setting_initialTime = localStorage.setting_initialTime;
		}

		let setting_ipAddress = localStorage.setting_ipAddress;
		if(setting_ipAddress === undefined){
			setting_ipAddress = "000.000.000.000";
			localStorage.setting_ipAddress = "000.000.000.000";
		} else {
			setting_ipAddress = localStorage.setting_ipAddress;
		}

		this.state = {
			webSocket: null,
			connected: false,
			ipAddr: "211.219.136.130",
			mouse_x: 0,
			mouse_y: 0,

			// mode: VIEW_GESTURE,
			// settings_view: SET_MAIN,
			// setting_initMode: VALUE_GESTURE,
			// setting_timerDirection: false,  // false : Backward , true : Forward
			// setting_initialTime: "00:30",
			// setting_ipAddress: "000.000.000.000",

			mode: mode,
			settings_view: settings_view,
			setting_initMode: setting_initMode,
			setting_timerDirection: setting_timerDirection,  // false : Backward , true : Forward
			setting_initialTime: setting_initialTime,
			setting_ipAddress: setting_ipAddress,
		};

	}

	onChangeIpAddr = (e) => {
		console.log("onChangeIpAddr");
		console.log("e.target.value", e.target.value);
		this.setState({
			...this.state,
			ipAddr: e.target.value
		})
	};

	onOpen = (evt) => {
		console.log("onOpen");
		console.log("evt", evt);
		this.setState({
			...this.state,
			connected: true
		})
	};

	onClose = (evt) => {
		console.log("onClose");
		console.log("evt", evt);
		this.setState({
			...this.state,
			connected: false
		})
	};

	onMessage = (evt) => {
		console.log("onMessage");
		console.log("evt", evt);
	};

	onError = (evt) => {
		console.log("onError");
		console.log("evt", evt);
	};

	onConnect = () => {
		console.log("onConnect");
		console.log("this.state.ipAddr", this.state.ipAddr);
		//const newWebSocket = new WebSocket('ws://211.219.136.130');
		const url = 'ws://' + this.state.ipAddr;
		const newWebSocket = new WebSocket(url);
		newWebSocket.onopen = (evt) => this.onOpen(evt);
		newWebSocket.onclose = (evt) => this.onClose(evt);
		newWebSocket.onmessage = (evt) => this.onMessage(evt);
		newWebSocket.onerror = (evt) => this.onError(evt);

		console.log("newWebSocket", newWebSocket);

		this.setState({
			...this.state,
			webSocket: newWebSocket
		});

		console.log("this.state", this.state);

	};

	onDisconnect = () => {
		console.log("onDisconnect");
		console.log(" this.state.webSocket", this.state.webSocket);
		this.state.webSocket.close();
		/*
		this.setState({
			...this.state,
			webSocket: null
		})

		 */
	};

	onSendCommand = () => {

	};

	onMouseCursorMove = (e) => {
		this.setState({
			...this.state,
			mouse_x: e.nativeEvent.offsetX,
			mouse_y: e.nativeEvent.offsetY
		});
		console.log(this.state.mouse_x, this.state.mouse_y);
	};


	onNext = () => {
		//const str = '{"type":"request", "cmd":"keyboard", "subcmd":"stroke-t1", "data": "{DOWN}"}';
		//props.webSocket.send(str);
	};

	onChangeMode = (value) => {
		let settings_view = this.state.settings_view;
		if(value === VIEW_SETTINGS) {
			settings_view = SET_MAIN;
			localStorage.settings_view = SET_MAIN;
		}

		this.setState({
			...this.state,
			mode: value,
			settings_view: settings_view
		});

		localStorage.mode = value;
	};

	onChangeSettingView = (value) => {
		this.setState({
			...this.state,
			settings_view: value
		});

		localStorage.settings_view = value;
	};

	onChangeInitMode = (value) => {
		this.setState({
			...this.state,
			setting_initMode: value
		});

		localStorage.setting_initMode = value;
	};

	onChangeInitalTime = (value) => {
		this.setState({
			...this.state,
			setting_initialTime: value
		});

		localStorage.setting_initialTime = value;
	};

	onChangeTimerDirection = (value) => {
		this.setState({
			...this.state,
			setting_timerDirection: value
		});

		localStorage.setting_timerDirection = value;
	};

	onChangeIpAddress = (value) => {
		this.setState({
			...this.state,
			setting_ipAddress: value
		});

		localStorage.setting_ipAddress = value;
	};

	render() {
		console.log(this.state);

		const settingFunc = {
			onChangeMode: this.onChangeMode,
			onChangeSettingView: this.onChangeSettingView,
			onChangeInitMode: this.onChangeInitMode,
			onChangeInitalTime: this.onChangeInitalTime,
			onChangeTimerDirection: this.onChangeTimerDirection,
			onChangeIpAddress: this.onChangeIpAddress,
		};

		const settingValue = {
			mode: this.state.mode,
			settings_view: this.state.settings_view,
			setting_initMode: this.state.setting_initMode,
			setting_timerDirection: this.state.setting_timerDirection,
			setting_initialTime: this.state.setting_initialTime,
			setting_ipAddress: this.state.setting_ipAddress,
		};

		return (
			<div className="App">
				<TopBar onChangeMode={this.onChangeMode}/>
				{this.state.mode === VIEW_SETTINGS &&
					<SettingsView settingValue={settingValue} settingFunc={settingFunc}/>
				}
				{this.state.mode === VIEW_GESTURE &&
					<>
						<TimerView
							setting_initialTime={this.state.setting_initialTime}
							setting_timerDirection={this.state.setting_timerDirection}/>
						<TouchView />
					</>
				}
				{this.state.mode === VIEW_MOUSE &&
					<>
						<TimerView
							setting_initialTime={this.state.setting_initialTime}
							setting_timerDirection={this.state.setting_timerDirection}/>
						<MouseView />
					</>
				}
				{/*<Container>*/}
				{/*<Row>*/}
				{/*	<ConnectBtn*/}
				{/*		onConnect={this.onConnect}*/}
				{/*		onDisconnet={this.onDisconnect}*/}
				{/*		connected={this.state.connected}*/}
				{/*		onChangeIpAddr={this.onChangeIpAddr}*/}
				{/*		ipAddr={this.state.ipAddr}/>*/}
				{/*</Row>*/}

				{/*<Row>*/}
				{/*    <ControllBtn onSendCommand={this.onSendCommand}/>*/}
				{/*</Row>*/}
				{/*<Row className="justify-content-center">*/}
				{/*    <MouseBtn onMouseCursorMove={this.onMouseCursorMove}></MouseBtn>*/}
				{/*</Row>*/}
				{/*</Container>*/}


			</div>
		);
	}
}

export default App;
