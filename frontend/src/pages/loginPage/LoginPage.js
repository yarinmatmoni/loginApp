import React from 'react';
import Login from '../../components/login/Login';
import style from './LoginPage.module.scss';

function LoginPage() {
	return (
		<div className={style.loginPage}>
			<Login />
		</div>
	);
}

export default LoginPage;
