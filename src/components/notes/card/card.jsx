//default
import React from "react";
//css
import "./card.scss";

const Card = (props) => {
	//destructuracion de las props
	const { titulo, nota } = props;

	return (
		<div className="card">
			<div className="top">
				<h3>{titulo}</h3>
			</div>
			<div className="linea"></div>
			<div className="bot">
				<p>{nota}</p>
			</div>
		</div>
	);
};

export default Card;
