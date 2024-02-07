import { useRef } from 'react';

function DebouncedButton({ onClick, children }) {
	const timeoutRef = useRef(null);

	return (
		<button
			onClick={() => {
				clearTimeout(timeoutRef.current); // Clear the timeout after execution

				timeoutRef.current = setTimeout(() => {
					onClick();
				}, 1000);
			}}
		>
			{children}
		</button>
	);
}

export default function DebounceIng() {
	return (
		<>
			<DebouncedButton onClick={() => alert('Spaceship launched!')}>
				Launch the spaceship
			</DebouncedButton>
			<DebouncedButton onClick={() => alert('Soup boiled!')}>
				Boil the soup
			</DebouncedButton>
			<DebouncedButton onClick={() => alert('Lullaby sung!')}>
				Sing a lullaby
			</DebouncedButton>
		</>
	);
}
