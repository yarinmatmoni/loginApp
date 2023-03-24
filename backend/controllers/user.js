const User = require('../models/userModel');

const getUser = async (req, res) => {
	const { userName } = req.params;

	try {
		if (!userName) return res.status(501).send({ error: 'Invalid Username' });
		const user = await User.findOne({ userName: userName });

		if (!user) return res.status(501).send({ error: 'User not found' });
		return res.status(200).send(user);
	} catch (error) {
		return res.status(404).send({ error: 'Cannot find user data' });
	}
};

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

module.exports = { getUser };
