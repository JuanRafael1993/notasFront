//default
import React, { useState } from 'react';
//componentes
import UpdateCard from '../updateCard/updateCard';
//componentes library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//helpers (token, traerCards)
import Token from '../../../helpers/token';
import ObtenerCards from '../../../helpers/apiTraerCards';
//icons
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
//css
import './card.scss';

const Card = (props) => {
	//destructuracion de las props
	const { titulo, nota, id, setNotas } = props;

	//estado para mostrar la card de actualizacion
	const [cardUpdate, setCardUpdate] = useState(false);

	//funcion para eliminar la nota
	async function handleEliminar(id) {
		try {
			let res = await fetch('http://localhost:3003/user/card', {
				method: 'DELETE',
				headers: {
					Authorization: Token(),
					id,
					'Content-Type': 'application/json',
				},
			});

			let data = await res.json();

			alert(data);

			traerCards();
		} catch (error) {
			console.log('hay un error al eliminar');
		}
	}

	//funcion para traer las cards
	async function traerCards() {
		let res = await ObtenerCards();
		setNotas(res);
	}

	return (
		<div className="card">
			{cardUpdate ? (
				<UpdateCard
					titulo={titulo}
					nota={nota}
					setNotas={setNotas}
					id={id}
					setCardUpdate={setCardUpdate}
				/>
			) : null}
			<FontAwesomeIcon
				onClick={() => setCardUpdate(true)}
				className="actualizar"
				icon={faEdit}
			/>
			<FontAwesomeIcon
				onClick={() => handleEliminar(id)}
				className="cerrar"
				icon={faTimes}
			/>
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
