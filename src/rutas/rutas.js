//default
import React from 'react';
//react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Notes from '../pages/notes';

const Rutas = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Notes />} />
			</Routes>
		</Router>
	);
};

export default Rutas;
