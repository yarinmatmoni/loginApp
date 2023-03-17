import { useFormik } from 'formik';

export const useFormikConfig = (data, loginValidation) => {
	const initObject = {};

	for (const key of data) {
		initObject[key] = '';
	}

	const formik = useFormik({
		initialValues: initObject,
		validate: loginValidation,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			console.log(values);
		},
	});

	return formik;
};
