import React from 'react';
import { useImmerReducer } from 'use-immer';
import { initialState, reducer } from './reducer';

function ReducerPage() {
	const [state, dispatch] = useImmerReducer(reducer, initialState);

	return (
		<div>
			{state.data?.map((e) => (
				<div key={e.id}>
					<p>{e.id}</p>
					<p>{e.name}</p>
					<hr />
				</div>
			))}

			<button
				onClick={() =>
					dispatch({
						type: 'CREATE',
					})
				}
			>
				Create
			</button>
		</div>
	);
}

export default ReducerPage;
