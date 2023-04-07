export default function getTimeFromMins(mins) {
	let hours = Math.trunc(mins / 60).toString();
	let minutes = (mins % 60).toString();
	return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')} hours`;
}
