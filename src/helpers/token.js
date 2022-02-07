export default function Token() {
	return `Bearer ${JSON.parse(localStorage.getItem("loggedNoteUser"))}`;
}
