import Token from './token';

export default async function ObtenerCards() {
	let respuesta = await fetch('http://localhost:3003/user/card', {
		method: 'GET',
		headers: {
			Authorization: Token(),
			'Content-Type': 'application/json',
		},
	});

	let datos = await respuesta.json();

	return datos;
}
