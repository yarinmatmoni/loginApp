import LoginPage from '../pages/loginPage/LoginPage';

export const routes = [
	{ path: '/', element: <LoginPage /> },
	{ path: '/register', element: <div>register</div> },
	{ path: '*', element: <div>page not found</div> },
];
