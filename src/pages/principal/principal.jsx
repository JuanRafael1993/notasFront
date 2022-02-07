//default
import React from "react";
//css
import "./principal.scss";
//components
import Navbar from "../../components/generales/navbar";
import Rutas from "../../rutas/rutas";

const Principal = (props) => {
	//destructuracion de las props
	const { setUser } = props;

	return (
		<div className="contenedor_principal">
			<header>
				<Navbar setUser={setUser} />
			</header>
			<Rutas />
		</div>
	);
};

export default Principal;
