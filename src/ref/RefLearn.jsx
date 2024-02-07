import { useRef, useState } from 'react';
import RenderTest from './RenderTest';
import StopWatch from './StopWatch';
import FixBrokenChartInput from './FixBrokenChartInput';
import OnOffToggleProblem from './OnOffToggleProblem';
import DebounceIng from './DebounceIng';
import TextChangeAfterSend from './TextChangeAfterSend';

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
			<br />
			<h1>Fix Broken Chart Input</h1>
			<FixBrokenChartInput />
			<br />
			<h1>Fix On Off Toggle Problem</h1>
			<OnOffToggleProblem />
			<br />
			<h1>Debouncing solve</h1>
			<DebounceIng />
			<br />
			<h1>Changing text after send button text</h1>
			<TextChangeAfterSend />
		</div>
	);
}

export default RefLearn;
