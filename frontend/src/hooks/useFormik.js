import { useFormik } from 'formik';
import { loginValidation } from '../utils/validate';

export const useFormikConfig = (data) => {
	const initData = data.data;

	const initObject = {};

	for (const key of initData) {
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
