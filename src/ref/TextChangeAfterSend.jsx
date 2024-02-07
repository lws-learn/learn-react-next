import { useState, useRef } from 'react';

export default function TextChangeAfterSend() {
	let txtRef = useRef(null);
	const handleChange = (e) => {
		txtRef.current = e.target.value;
	};
	function handleSend() {
		setTimeout(() => {
			alert('Sending: ' + txtRef.current);
		}, 3000);
	}

	return (
		<>
			<input onChange={handleChange} />
			<button onClick={handleSend}>Send</button>
		</>
	);
}
