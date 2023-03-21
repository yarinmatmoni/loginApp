import { useFormik } from 'formik';

export const useFormikConfig = (data, loginValidation, file) => {
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
			values = await Object.assign(values, { profileImage: file || '' });
			console.log(values);
		},
	});

	return formik;
};
