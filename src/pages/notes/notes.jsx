//default
import React, { useState, useEffect } from 'react';
//css
import './notes.scss';
//componentes library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//icons
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//componentes
import Card from '../../components/notes/card';
import AddCard from '../../components/notes/addCard';
//helpers (obtener cards)
import ObtenerCards from '../../helpers/apiTraerCards';

const Notes = () => {
	//estado para agregar nota
	const [addNote, setAddNote] = useState(false);
	//estado para las notas
	const [notas, setNotas] = useState([]);

	//efecto para obtener las cards
	useEffect(() => {
		traerCards();
	}, []);

	//funcion para traer las cards
	async function traerCards() {
		let res = await ObtenerCards();
		console.log(res);
		setNotas(res);
	}

	return (
		<div className="contenedor_notes">
			{/*Agregar nota*/}
			{addNote ? <AddCard setAddNote={setAddNote} setNotas={setNotas} /> : null}
			<div className="agregar_nota">
				<FontAwesomeIcon onClick={() => setAddNote(true)} icon={faPlus} />
			</div>
			{notas.map((item) => {
				return (
					<Card
						key={item._id}
						titulo={item.titulo}
						nota={item.nota}
						id={item._id}
						setNotas={setNotas}
					/>
				);
			})}
		</div>
	);
};

export default Notes;
