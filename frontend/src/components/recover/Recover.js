import React from 'react';
import { Link } from 'react-router-dom';
import style from './Recover.module.scss';
import { Toaster } from 'react-hot-toast';
import { useFormikConfig } from '../../hooks/useFormik';
import { OTPValidation } from '../../utils/validate';

function Recover() {
	const formik = useFormikConfig(['OTP'], OTPValidation);

	return (
		<div className={style.recoverContainer}>
			<Toaster
				position='top-center'
				reverseOrder={false}
			></Toaster>
			<div className={style.titles}>
				<h1>Recovery</h1>
				<p>Enter OTP digits who sent to your email to recover your password</p>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<div className={style.formInputs}>
					<div className={style.inputContainer}>
						<input
							type='text'
							placeholder='OTP'
							{...formik.getFieldProps('OTP')}
						></input>
					</div>
					<button type='submit'>RECOVER</button>
					<Link to={'/'}>BACK</Link>
				</div>
				<div className={style.bottom}>
					<p>
						Can't get OTP? <Link to={'/'}>Resend Now</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Recover;
