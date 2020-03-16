import React, {useState} from 'react';
import {
	ListGroup,
	ListGroupItem,
} from "reactstrap";
import InputMask from "react-input-mask";

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

const IPAddress = (props) => {

	//const [ ipAddress, setIpAddress ] = useState("000.000.000.000");
	const {settings_ipAddress, onChangeIpAddress} = props;
	const ipAddress = settings_ipAddress;
	const setIpAddress = onChangeIpAddress;

	const onChangeIp = (e) => {
		setIpAddress(e.target.value);
	};

	return(
		<ListGroup>
			<ListGroupItem style={ListGroupItemtyle} tag="a" href="#" action>
				<div style={ItemNameStyle}>IP Address</div>
				<div style={{marginLeft: "auto"}}>
					<InputMask
						style={{ width: "130px", textAlign: "center"}}
						mask = "999.999.999.999"
						// defaultValue = {ipAddress}
						maskChar="_"
						value={ipAddress}
						onChange={onChangeIp}
					/>
				</div>
			</ListGroupItem>
		</ListGroup>
	)
};

export default IPAddress;