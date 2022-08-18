//default
import React, { useState } from 'react';
//css
import './registrarse.scss';
//img
import notas from '../../utils/img/notas.png';

const Registrarse = ({ setInicioRegistrarse }) => {
	//estado para los inputs
	const [inputs, setInputs] = useState({
		correo: '',
		pass: '',
		confirmarPass: '',
	});

	//funcion para registrarse
	async function handleRegister(e) {
		e.preventDefault();

		const param = {
			email: inputs.correo,
			pass: inputs.pass,
		};

		try {
			const res = await fetch('http://localhost:3003/user/register', {
				method: 'POST',
				body: JSON.stringify(param),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await res.json();

			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	//funcion para guardar los inputs
	function handleDatos(e) {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div className="contenedor_registrarse">
			<div className="contenedor_grid">
				<div className="contenedor_izquierda">
					<img alt="img nota" src={notas}></img>
				</div>
				<div className="contenedor_derecha">
					<h2>Únete a NOTES hoy mismo.</h2>
					<div className="contenedor_form">
						<form onSubmit={(e) => handleRegister(e)}>
							<p>Correo</p>
							<input
								name="correo"
								value={inputs.correo}
								onChange={(e) => handleDatos(e)}
							/>
							<p>Contraseña</p>
							<input
								name="pass"
								value={inputs.pass}
								onChange={(e) => handleDatos(e)}
							/>
							<p>Confirmar Contraseña</p>
							<input
								name="confirmarPass"
								value={inputs.confirmarPass}
								onChange={(e) => handleDatos(e)}
							/>
							<button type="submit" className="btn_registrarse">
								Registrarse
							</button>
							<span>
								Al registrarte, aceptas los Términos de servicio y la Politica
								de privacidad, incluida la politica de Uso de Cookies.
							</span>
						</form>
						<p className="txt_cuenta">¿Ya tienes una cuenta?</p>
						<button
							onClick={() => setInicioRegistrarse(true)}
							className="btn_iniciaSesion"
						>
							Iniciar Sesión
						</button>
					</div>
				</div>
			</div>
			<footer>
				<p>© 2022 Notes, Inc.</p>
			</footer>
		</div>
	);
};

export default Registrarse;
