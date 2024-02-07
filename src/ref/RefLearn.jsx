import { useRef, useState } from 'react';
import RenderTest from './RenderTest';
import StopWatch from './StopWatch';

function RefLearn() {
	const [r, setR] = useState();
	let { current } = useRef(0);

	const handleClick = () => {
		console.log((current += 1));
		setR((current += 1));
	};

	return (
		<div>
			<p>not working because not-rendering ref current</p>
			<button onClick={handleClick}>Click the Ref {current} </button>
			<RenderTest count={r} />
			<br />
			<h1>Stop Watch</h1>

			<StopWatch />
		</div>
	);
}

export default RefLearn;
