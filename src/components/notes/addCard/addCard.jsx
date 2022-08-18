//default
import React, { useState } from 'react';
//helpers (token)
import Token from '../../../helpers/token';
import ObtenerCards from '../../../helpers/apiTraerCards';
//css
import './addCard.scss';

const AddCard = (props) => {
	//Destructuracion de las props
	const { setAddNote, setNotas } = props;

	//estado para el titulo
	const [titulo, setTitulo] = useState('');
	//estado para la nota
	const [nota, setNota] = useState('');

	//funcion para agregar nota
	async function handleAddNote() {
		try {
			let res = await fetch('http://localhost:3003/user/card', {
				method: 'POST',
				body: JSON.stringify({
					titulo,
					nota,
					id: JSON.parse(localStorage.getItem('loggedNoteIdUser')),
				}),
				headers: {
					Authorization: Token(),
					'Content-Type': 'application/json',
				},
			});

			let data = await res.json();
			alert(data);

			setAddNote(false);

			//consumo del api de notas
			let respuesta = await ObtenerCards();

			setNotas(respuesta);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="contenedor_addCard">
			<div className="addCard">
				<input
					onChange={(e) => setTitulo(e.target.value)}
					type="text"
					placeholder="Titulo"
				/>
				<div className="linea"></div>
				<textarea
					onChange={(e) => setNota(e.target.value)}
					type="text"
					placeholder="Nota"
				/>
				<div className="contenedor_btoones">
					<button onClick={() => setAddNote(false)}>Cancelar</button>
					<button onClick={() => handleAddNote()}>Agregar</button>
				</div>
			</div>
		</div>
	);
};

export default AddCard;
