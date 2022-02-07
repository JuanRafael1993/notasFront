//default
import React, { useState, useEffect } from "react";
//css
import "./App.css";
import "bulma/css/bulma.min.css";
//components
import ChangeIniciaRegistrarse from "./pages/changeIniciaRegistrarse";
import Principal from "./pages/principal";

function App() {
	//estado para el resultado
	const [user, setUser] = useState(null);

	//efecto para mantener la sesion activa
	useEffect(() => {
		const loggedNoteUser = localStorage.getItem("loggedNoteUser");
		if (loggedNoteUser) {
			const token = JSON.parse(loggedNoteUser);
			setUser(token);
		}
	}, []);

	return <div className="App">{user === null ? <ChangeIniciaRegistrarse setUser={setUser} /> : <Principal setUser={setUser} />}</div>;
}

export default App;
