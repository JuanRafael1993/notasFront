import Token from './token';

export default async function ObtenerCards() {
	let id = localStorage.getItem('loggedNoteIdUser');
	let respuesta = await fetch('http://localhost:3003/user/card', {
		method: 'GET',
		headers: {
			id: JSON.parse(id),
			Authorization: Token(),
			'Content-Type': 'application/json',
		},
	});

	let datos = await respuesta.json();

	return datos;
}
