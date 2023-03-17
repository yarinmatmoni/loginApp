import React from 'react';
import style from './Login.module.scss';
import avatarImage from '../../images/avatarSvg.svg';
import emailImage from '../../images/emailSvg.svg';
import passwordImage from '../../images/fingerprintSvg.svg';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormikConfig } from '../../hooks/useFormik';
import { loginValidation } from '../../utils/validate';

function Login() {
	const formik = useFormikConfig(['email', 'password'], loginValidation);

	return (
		<div className={style.loginContainer}>
			<Toaster
				position='top-center'
				reverseOrder={false}
			></Toaster>
			<div className={style.titles}>
				<h1>Login</h1>
				<p>Welcome Back, Please login to your account.</p>
			</div>
			<form onSubmit={formik.handleSubmit}>
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
							{...formik.getFieldProps('email')}
						></input>
						<img
							src={emailImage}
							alt='email'
						></img>
					</div>
					<div className={style.inputContainer}>
						<input
							type='password'
							placeholder='Password'
							{...formik.getFieldProps('password')}
						></input>
						<img
							src={passwordImage}
							alt='password'
						></img>
					</div>
					<button type='submit'>LOGIN</button>
				</div>
				<div className={style.bottom}>
					<p>
						Not a member yet? <Link to={'/register'}>Register Now</Link>
					</p>
					<p>
						Forgot Password? <Link to={'/recover'}>Recover Now</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Login;
