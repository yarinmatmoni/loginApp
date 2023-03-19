import LoginPage from '../pages/loginPage/LoginPage';
import RecoverPage from '../pages/recoverPage/RecoverPage';
import ResetPage from '../pages/resetPage/ResetPage';

export const routes = [
	{ path: '/', element: <LoginPage /> },
	{ path: '/register', element: <div>register</div> },
	{ path: '/recover', element: <RecoverPage /> },
	{ path: '/reset', element: <ResetPage /> },
	{ path: '*', element: <div>page not found</div> },
];
