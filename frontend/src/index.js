import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globalStyle.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './utils/browserRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>,
);

reportWebVitals();
