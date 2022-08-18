//default
import React, { useState } from 'react';
//css
import './iniciaSesion.scss';
//logo
import Logo from '../../utils/img/notas.png';

const IniciaSesion = ({ setUser, setInicioRegistrarse }) => {
	//estado para los datos del usuario
	const [dataUser, setDataUser] = useState({});

	const handleLogin = (e) => {
		e.preventDefault();
		handleEntrar();
	};

	//funcion para entrar
	async function handleEntrar() {
		try {
			const res = await fetch(`http://localhost:3003/user/login`, {
				method: 'POST',
				body: JSON.stringify(dataUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await res.json();

			if (data.code === 0) {
				setUser(data);
				console.log(data);
				//guardar el token en el localstorage
				localStorage.setItem('loggedNoteUser', JSON.stringify(data.token));
				//guardar el id en el localstorage
				localStorage.setItem('loggedNoteIdUser', JSON.stringify(data.id));
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	}

	const handleLLenado = (e) => {
		setDataUser({
			...dataUser,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="contenedor_iniciaSesion">
			<div className="contenedor_form">
				<img alt="Logo" src={Logo} />
				<h3>Inicia sesión en Notes</h3>
				<form
					onChange={(e) => handleLLenado(e)}
					onSubmit={(e) => handleLogin(e)}
				>
					<p>correo</p>
					<input type="text" name="email" />
					<p>contraseña</p>
					<input type="text" name="pass" />
					<button type="submit">Entrar</button>
				</form>
				<p className="txt_cuenta">¿No tienes una cuenta?</p>
				<button
					onClick={() => setInicioRegistrarse(false)}
					className="btn_registrarse"
				>
					Regístrarse
				</button>
			</div>
		</div>
	);
};

export default IniciaSesion;
