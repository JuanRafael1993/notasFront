//default
import React, { useState } from "react";
//components
import IniciaSesion from "../iniciaSesion";
import Registrarse from "../registrarse";

const ChangeIniciaRegistrarse = ({ setUser }) => {
	//estado para iniciar o registrarse
	const [inicioRegistrarse, setInicioRegistrarse] = useState(false);

	return (
		<>
			{inicioRegistrarse ? (
				<IniciaSesion setUser={setUser} setInicioRegistrarse={setInicioRegistrarse} />
			) : (
				<Registrarse setInicioRegistrarse={setInicioRegistrarse} />
			)}
		</>
	);
};
export default ChangeIniciaRegistrarse;
