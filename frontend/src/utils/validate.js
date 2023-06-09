import toast from 'react-hot-toast';

export const loginValidation = async (values) => {
	const errors = loginVerify({}, values);
	return errors;
};

export const OTPValidation = async (values) => {
	const errors = OTPVerify({}, values);
	return errors;
};

export const resetValidation = async (values) => {
	const errors = resetVerify({}, values);
	return errors;
};

export const signUpValidation = async (values) => {
	const errors = signUpVerify({}, values);
	return errors;
};

//------------------------------ functions ----------------------------------//

const loginVerify = (error = {}, values) => {
	if (!values.email) error.email = toast.error('Email Required');
	else if (!values.password) error.password = toast.error('Password Required');
	return error;
};

const OTPVerify = (error = {}, values) => {
	if (!values.OTP) error.OTP = toast.error('OTP Digits Required');
	else if (!/^\d{6}$/.test(values.OTP)) error.OTP = toast.error('OTP Include 6 Digits Only');
	return error;
};

const resetVerify = (error = {}, values) => {
	if (!values.password) error.password = toast.error('Password Required');
	else if (!values.confirmPassword) error.confirmPassword = toast.error('Confirm Password Required');
	else if (values.password !== values.confirmPassword) error.exist = toast.error('Password not match');
	return error;
};

//TODO: more validations
const signUpVerify = (error = {}, values) => {
	if (!values.firstName) error.firstName = toast.error('First Name Required');
	else if (!values.lastName) error.lastName = toast.error('Last Name Required');
	else if (!values.userName) error.userName = toast.error('User Name Required');
	else if (!values.email) error.email = toast.error('Email Required');
	else if (!values.birthDay) error.birthDay = toast.error('BirthDay Required');
	else if (!values.password) error.password = toast.error('Password Required');
	return error;
};
