import React from 'react';
import style from './Reset.module.scss';
import passwordImage from '../../images/fingerprintSvg.svg';
import { Toaster } from 'react-hot-toast';
import { useFormikConfig } from '../../hooks/useFormik';
import { resetValidation } from '../../utils/validate';

function Reset() {
	const formik = useFormikConfig(['email', 'password'], resetValidation);

	return (
		<div className={style.resetContainer}>
			<Toaster
				position='top-center'
				reverseOrder={false}
			></Toaster>
			<div className={style.titles}>
				<h1>Reset</h1>
				<p>Enter new password</p>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<div className={style.formInputs}>
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
					<div className={style.inputContainer}>
						<input
							type='password'
							placeholder='Confirm Password'
							{...formik.getFieldProps('confirmPassword')}
						></input>
						<img
							src={passwordImage}
							alt='confirm'
						></img>
					</div>
					<button type='submit'>RESET PASSWORD</button>
				</div>
			</form>
		</div>
	);
}

export default Reset;
