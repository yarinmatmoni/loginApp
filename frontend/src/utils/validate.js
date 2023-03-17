import toast from 'react-hot-toast';

export const loginValidation = async (values) => {
	const errors = loginVerify({}, values);
	return errors;
};

const loginVerify = (error = {}, values) => {
	if (!values.email) error.email = toast.error('Email Required');
	else if (!values.password) error.password = toast.error('Password Required');
	return error;
};
