export function formatDate(date) {
	if (!(date instanceof Date)) {
		console.error('Provided value is not a Date object');
		return null;
	}

	// format the date YYYY-MM-DD
	let year = date.getFullYear();
	let month = (date.getMonth() + 1).toString().padStart(2, '0');
	let day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}
