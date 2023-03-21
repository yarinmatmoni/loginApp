import React from 'react';
import style from './Register.module.scss';
import avatarImage from '../../images/avatarSvg.svg';
import { registerForm } from '../../utils/registerForm';
import { Toaster } from 'react-hot-toast';
import { useFormikConfig } from '../../hooks/useFormik';
import { signUpValidation } from '../../utils/validate';

//TODO: Add option go to login page for
//TODO: handle upload image

function Register() {
	const formikData = [];
	registerForm.map((data) => formikData.push(data.name));
	const formik = useFormikConfig(formikData, signUpValidation);

	return (
		<div className={style.registerContainer}>
			<Toaster
				position='top-center'
				reverseOrder={false}
			></Toaster>
			<div className={style.titles}>
				<h1>Register</h1>
			</div>
			<form onSubmit={formik.handleSubmit}>
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
									{...formik.getFieldProps(`${input.name}`)}
									max={input.name === 'birthDay' ? new Date().toISOString().split('T')[0] : undefined}
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
