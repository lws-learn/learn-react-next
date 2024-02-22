import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RefLearn from './ref/RefLearn';
import Layout from './layout/Layout';
import App from './App';
import ReducerPage from './reducer/ReducerPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/ref',
				element: <RefLearn />,
			},
			{
				path: '/reducer',
				element: <ReducerPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
