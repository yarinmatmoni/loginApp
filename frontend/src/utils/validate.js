import toast from 'react-hot-toast';

export const loginValidation = async (values) => {
	const errors = loginVerify({}, values);
	return errors;
};

export const OTPValidation = async (values) => {
	const errors = OTPVerify({}, values);
	return errors;
};

const loginVerify = (error = {}, values) => {
	if (!values.email) error.email = toast.error('Email Required');
	else if (!values.password) error.password = toast.error('Password Required');
	return error;
};

//TODO: add check the value is only digits
const OTPVerify = (error = {}, values) => {
	if (!values.OTP) error.email = toast.error('OTP Digits Required');
	else if (values.OTP.length !== 6) error.OTP = toast.error('OTP Include 6 Digits Only');
	return error;
};
