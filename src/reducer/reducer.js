export const initialState = {
	data: [
		{
			id: 1,
			name: 'sdfs',
		},
	],
};

const maxId = (items) => {
	const i = items.reduce(
		(pre, cur) => (pre && pre.id > cur.id ? pre.id : cur.id),
		0
	);
	return i + 1;
};

export const reducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'CREATE':
			state.data.push({
				id: maxId(state.data),
				name: 'New Id ' + maxId(state.data),
			});

			break;

		default:
			return state;
	}
};
