const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
	const { userName } = req.params;

	try {
		if (!userName) return res.status(501).send({ error: 'Invalid Username' });
		const user = await User.findOne({ userName: userName });

		if (!user) return res.status(501).send({ error: 'User not found' });
		const { password, ...rest } = Object.assign({}, user.toJSON());

		return res.status(200).send(rest);
	} catch (error) {
		return res.status(404).send({ error: 'Cannot find user data' });
	}
};

const updateUser = async (req, res) => {
	try {
		const id = req.user._id;
		if (id) {
			const body = req.body;
			User.updateOne({ _id: id }, body, (error) => {
				if (error) throw error;
				return res.status(200).send('User update successfully');
			});
		} else {
			return res.status(401).send({ error: 'User not found' });
		}
	} catch (error) {
		return res.status(401).send({ error });
	}
};

const resetPassword = async (req, res) => {
	try {
		if (!req.app.locals.resetSession) return res.status(440).send({ error: 'Session expired' });

		const { userName, password } = req.body;
		const user = await User.findOne({ userName: userName });
		if (!user) return res.status(404).send({ error: 'User not found' });

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);
		User.updateOne({ userName: userName }, { password: hashPassword }, (error) => {
			if (error) throw error;
			req.app.locals.resetSession = false;
			return res.status(200).send('Password updated successfully');
		});
	} catch (error) {
		return res.status(401).send({ error });
	}
};

module.exports = { getUser, updateUser, resetPassword };
