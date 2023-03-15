import React from 'react';
import style from './Login.module.scss';
import avatarImage from '../../images/avatarSvg.svg';
import emailImage from '../../images/emailSvg.svg';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<div className={style.loginContainer}>
			<div className={style.titles}>
				<h1>Login</h1>
				<p>Welcome Back, Please login to your account.</p>
			</div>
			<form>
				<div className={style.profileImage}>
					<img
						src={avatarImage}
						alt='profile'
					></img>
				</div>
				<div className={style.formInputs}>
					<div className={style.inputContainer}>
						<input
							type='email'
							placeholder='Email'
							required
						></input>
						<img
							src={emailImage}
							alt=''
						></img>
					</div>
					<button type='submit'>LOGIN</button>
				</div>
				<div className={style.register}>
					<p>
						Not a member yet? <Link to={'/register'}>Register Now</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Login;
