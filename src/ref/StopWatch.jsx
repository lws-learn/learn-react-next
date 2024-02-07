import React, { useRef, useState } from 'react';

function StopWatch() {
	const [startTime, setStartTime] = useState(null);
	const [countTime, setCountTime] = useState(null);

	let intervalRef = useRef(null);

	const handleClock = () => {
		setStartTime(Date.now());
		setCountTime(Date.now());

		clearInterval(intervalRef.current);

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

	const handleClearTime = () => {
		setCountTime(null);
		setStartTime(null);
		handleStopWatch();
	};
	return (
		<div>
			<h1>Time passed : {timePass.toFixed(3)}</h1>
			<button onClick={handleClock}>Start</button>
			<button onClick={handleStopWatch}>Stop</button>
			<button onClick={handleClearTime}>Clear Time</button>
		</div>
	);
}

export default StopWatch;
