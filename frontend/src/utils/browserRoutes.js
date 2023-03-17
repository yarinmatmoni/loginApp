import LoginPage from '../pages/loginPage/LoginPage';
import RecoverPage from '../pages/recoverPage/RecoverPage';

export const routes = [
	{ path: '/', element: <LoginPage /> },
	{ path: '/register', element: <div>register</div> },
	{ path: '/recover', element: <RecoverPage /> },
	{ path: '*', element: <div>page not found</div> },
];
