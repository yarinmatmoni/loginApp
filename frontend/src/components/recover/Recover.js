import React from 'react';
import { Link } from 'react-router-dom';
import style from './Recover.module.scss';

function Recover() {
	return (
		<div className={style.recoverContainer}>
			<div className={style.titles}>
				<h1>Recovery</h1>
				<p>Enter OTP to recover your password</p>
			</div>
			<form>
				<div className={style.formInputs}>
					<div className={style.inputContainer}>
						<input
							type='text'
							placeholder='OTP'
						></input>
					</div>
					<button type='submit'>RECOVER</button>
					<Link to={'/'}>BACK</Link>
				</div>
				<div className={style.bottom}>
					<p>
						Can't fet OTP? <Link to={'/'}>Resend Now</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Recover;
