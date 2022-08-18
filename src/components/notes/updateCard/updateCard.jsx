//default
import React, { useState } from 'react';
//helpers (token, obtenerCards)
import Token from '../../../helpers/token';
import ObtenerCards from '../../../helpers/apiTraerCards';
//css
import './updateCard.scss';

const UpdateCard = (props) => {
	//destructueracion de las props
	const { setCardUpdate, id, setNotas, titulo, nota } = props;

	//estado para el titulo
	const [tituloUpdate, setTituloUpdate] = useState(titulo);
	//estado para la nota
	const [notaUpdate, setNotaUpdate] = useState(nota);

	//funcion para actualizar la nota
	async function handleUpdateNote() {
		try {
			let res = await fetch('http://localhost:3003/user/card', {
				method: 'PUT',
				body: JSON.stringify({ titulo: tituloUpdate, nota: notaUpdate }),
				headers: {
					Authorization: Token(),
					id,
					'Content-Type': 'application/json',
				},
			});
			let data = await res.json();

			alert(data);

			setCardUpdate(false);
			traerCards();
		} catch (error) {
			console.log('error al actualizar la nota');
		}
	}

	//funcion para traer las cards
	async function traerCards() {
		let res = await ObtenerCards();
		setNotas(res);
	}

	return (
		<div className="contenedor_addCard">
			<div className="addCard">
				<input
					value={tituloUpdate}
					onChange={(e) => setTituloUpdate(e.target.value)}
					type="text"
					placeholder="Titulo"
				/>
				<div className="linea"></div>
				<textarea
					value={notaUpdate}
					onChange={(e) => setNotaUpdate(e.target.value)}
					type="text"
					placeholder="Nota"
				/>
				<div className="contenedor_btoones">
					<button onClick={() => setCardUpdate(false)}>Cancelar</button>
					<button onClick={() => handleUpdateNote()}>Agregar</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateCard;
