import React from 'react';
import style from './Register.module.scss';
import avatarImage from '../../images/avatarSvg.svg';
import { registerForm } from '../../utils/registerForm';

//TODO: Date type - fix logo color + limit the option to choose future date.
//TODO: Add option go to login page for
//TODO: validation form

function Register() {
	return (
		<div className={style.registerContainer}>
			<div className={style.titles}>
				<h1>Register</h1>
			</div>
			<form>
				<div className={style.formInputs}>
					<div className={style.profileImage}>
						<label htmlFor='profileImage'>
							<img
								src={avatarImage}
								alt='profile'
							></img>
						</label>
						<input
							type='file'
							id='profileImage'
							name='profileImage'
						></input>
					</div>
					<div className={style.formInputs}>
						{registerForm.map((input) => (
							<div
								className={style.inputContainer}
								key={input.name}
							>
								<input
									placeholder={input.placeHolder}
									type={input.type}
								/>
							</div>
						))}
					</div>
					<button type='submit'>SIGN UP</button>
				</div>
			</form>
		</div>
	);
}

export default Register;
