//Default
import React from "react";
//css
import "./navbar.scss";
//react router
import { NavLink, BrowserRouter as Router } from "react-router-dom";
//componentes library
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
//import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
//imagenes
import notes from "../../../utils/img/notas.png";

const Navbar = (props) => {
	//destructuracion de las props
	const { setUser } = props;

	//funcion para el active
	/* function active(active) {
		if (active) {
			return "navbar-item active";
		} else {
			return "navbar-item link";
		}
	} */

	//funcion para cerrar sesion
	function handleCerrarSesion() {
		setUser(null);
		//remueve el token del localstorage
		localStorage.removeItem("loggedNoteUser");
	}

	return (
		<div>
			<Router>
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<NavLink className="navbar-item" to="/">
							<img src={notes} width="30" height="30" alt="logo"></img>
						</NavLink>

						{/* <NavLink className={({ isActive }) => active(isActive)} to="/">
							Inicio
						</NavLink>

						<NavLink className={({ isActive }) => active(isActive)} to="/about">
							About
						</NavLink>

						<NavLink className={({ isActive }) => active(isActive)} to="/contacto">
							Contacto
						</NavLink> */}

						{/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="youtube.com">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a> */}
					</div>

					<div className="navbar-menu">
						<div className="navbar-end">
							{/* <div className="contenedor_icon_login">
								<FontAwesomeIcon icon={faUserAstronaut} />
							</div> */}
							<button onClick={() => handleCerrarSesion()}>Cerrar Sesión</button>
						</div>
					</div>
				</nav>
			</Router>
		</div>
	);
};

export default Navbar;
