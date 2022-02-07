//default
import React, { useState } from "react";
//css
import "./notes.scss";
//componentes library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//componentes
import Card from "../../components/notes/card";
import AddCard from "../../components/notes/addCard";

const Notes = () => {
	//estado para agregar nota
	const [addNote, setAddNote] = useState(false);

	return (
		<div className="contenedor_notes">
			{/*Agregar nota*/}
			{addNote ? <AddCard setAddNote={setAddNote} /> : null}
			<div className="agregar_nota">
				<FontAwesomeIcon onClick={() => setAddNote(true)} icon={faPlus} />
			</div>
			<Card
				titulo="Titulo Nota"
				nota="ldfds dsf sdf sdf d f sdf sdf sdf sdf  dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef"
			/>
			<Card
				titulo="Titulo Nota"
				nota="ldfds dsf sdf sdf d f sdf sdf sdf sdf  dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef"
			/>
			<Card
				titulo="Titulo Nota"
				nota="ldfds dsf sdf sdf d f sdf sdf sdf sdf  dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef dsfdsfsdfsdf sdf sdffs dfsdf sdf ef rf esdfsdfsdf ef"
			/>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>
	);
};

export default Notes;
