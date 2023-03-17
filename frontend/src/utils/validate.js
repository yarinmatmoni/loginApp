import toast from 'react-hot-toast';

export const emailValidation = async (values) => {
	const errors = emailVerify({}, values);
	return errors;
};

const emailVerify = (error = {}, values) => {
	if (!values.email) error.email = toast.error('Email Required');
	return error;
};
