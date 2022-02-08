//default
import React from 'react';
//componentes library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//icons
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
//css
import './card.scss';

const Card = (props) => {
	//destructuracion de las props
	const { titulo, nota } = props;

	return (
		<div className="card">
			<FontAwesomeIcon className="actualizar" icon={faEdit} />
			<FontAwesomeIcon className="cerrar" icon={faTimes} />
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
