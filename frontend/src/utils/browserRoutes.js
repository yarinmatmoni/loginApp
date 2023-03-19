import LoginPage from '../pages/loginPage/LoginPage';
import RecoverPage from '../pages/recoverPage/RecoverPage';
import ResetPage from '../pages/resetPage/ResetPage';
import RegisterPage from '../pages/registerPage/RegisterPage';

export const routes = [
	{ path: '/', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/recover', element: <RecoverPage /> },
	{ path: '/reset', element: <ResetPage /> },
	{ path: '*', element: <div>page not found</div> },
];
