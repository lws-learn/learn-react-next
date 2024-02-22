import { Link, Outlet } from 'react-router-dom';
const linksList = [
	{
		name: 'Home',
		to: '/',
	},
	{
		name: 'Ref',
		to: '/ref',
	},
	{
		name: 'Reducer',
		to: '/reducer',
	},
];
function Layout() {
	return (
		<div>
			<ul style={style.ul}>
				{linksList.map((e, i) => {
					return (
						<li key={i}>
							<Link to={e.to}> {e.name}</Link>
						</li>
					);
				})}
			</ul>
			<Outlet />
		</div>
	);
}

export default Layout;

const style = {
	ul: {
		display: 'flex',
		// justifyContent: 'space-between',
		gap: '20px',
		listStyle: 'none',
		alignItems: 'center',
	},
};
