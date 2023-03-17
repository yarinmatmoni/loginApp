import { useFormik } from 'formik';
import { emailValidation } from './validate';

export const useFormikConfig = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validate: emailValidation,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			console.log(values);
		},
	});

	return formik;
};
