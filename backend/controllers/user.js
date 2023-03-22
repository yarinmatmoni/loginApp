const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
	try {
		const { userName, firstName, lastName, email, password, birthday, profileImage } = req.body;
		const existUser = await User.findOne({ email: email });
		const existUserName = await User.findOne({ username: userName });

		if (existUser) return res.status(409).send('User already exists');
		if (existUserName) return res.status(409).send('Username have to be unique');

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		const newUser = User({
			userName: userName,
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: hashPassword,
			birthday: birthday,
			profileImage: profileImage || '',
		});

		newUser.save((error, newUser) => {
			if (error) return res.status(400).send(error.message);
			res.status(200).send(newUser);
		});
	} catch (error) {
		return res.status(500).send(error);
	}
};

//FIXME: example to GET method
// const getExamplesList = async (req, res) => {
// 	try {
// 		const examplesList = await Example.find();
// 		res.status(200).send(examplesList);
// 	} catch (error) {
// 		res.status(400).send({
// 			status: 'Fail',
// 			error: error.message,
// 		});
// 	}
// };

//FIXME: example to GET method by id
// const getExampleById = async (req, res) => {
// 	if (req.params.id === null || req.params.id === undefined) {
// 		res.status(400).send({
// 			status: 'Fail',
// 			error: error.message,
// 		});
// 	}

// 	try {
// 		const example = await Example.findById(req.params.id);
// 		res.status(200).send(example);
// 	} catch (error) {
// 		res.status(400).send({
// 			status: 'Fail',
// 			error: error.message,
// 		});
// 	}
// };

//FIXME: example to POST method
// const newTest = (req, res) => {
// 	const example = new Example({
// 		name: req.body.name,
// 		massage: req.body.massage,
// 	});

// 	example.save((error, example) => {
// 		if (error) {
// 			res.status(400).send({
// 				status: 'Fail',
// 				error: error.message,
// 			});
// 		} else {
// 			res.status(200).send({
// 				status: 'OK',
// 				example: example,
// 			});
// 		}
// 	});
// };

module.exports = { register };
