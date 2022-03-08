//default
import React from 'react';
//css
import './registrarse.scss';
//img
import notas from '../../utils/img/notas.png';

const Registrarse = ({ setInicioRegistrarse }) => {
	return (
		<div className="contenedor_registrarse">
			<div className="contenedor_grid">
				<div className="contenedor_izquierda">
					<img alt="img nota" src={notas}></img>
				</div>
				<div className="contenedor_derecha">
					<h2>Únete a NOTES hoy mismo.</h2>
					<div className="contenedor_form">
						<form>
							<p>Correo</p>
							<input />
							<p>Contraseña</p>
							<input />
							<p>Confirmar Contraseña</p>
							<input />
							<button className="btn_registrarse">Registrarse</button>
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
