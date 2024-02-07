import { useRef, useState } from 'react';

export default function OnOffToggleProblem() {
	// const isOnRef = useRef(false);
	const [on, setOn] = useState(false);

	return <button onClick={() => setOn((e) => !e)}>{on ? 'On' : 'Off'}</button>;
}
