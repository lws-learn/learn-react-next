import React, { useRef, useState } from 'react';

function StopWatch() {
	const [startTime, setStartTime] = useState(null);
	const [countTime, setCountTime] = useState(null);

	let intervalRef = useRef(null);

	const handleClock = () => {
		setStartTime(Date.now());
		setCountTime(Date.now());

		// clearInterval(current);

		intervalRef.current = setInterval(() => {
			setCountTime(Date.now());
		}, 10);
	};

	// calculate time pass
	let timePass = 0;
	if (startTime != null && countTime != null) {
		timePass = (countTime - startTime) / 1000;
	}

	const handleStopWatch = () => {
		clearInterval(intervalRef.current);
	};

	return (
		<div>
			<h1>time passed : {timePass.toFixed(3)}</h1>
			<button onClick={handleClock}>Start</button>
			<button onClick={handleStopWatch}>Stop</button>
		</div>
	);
}

export default StopWatch;
