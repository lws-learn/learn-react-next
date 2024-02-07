import { useRef, useState } from 'react';
import RenderTest from './RenderTest';

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
		</div>
	);
}

export default RefLearn;
