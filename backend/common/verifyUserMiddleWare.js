const User = require('../models/userModel');

const verifyUser = async (req, res, next) => {
	try {
		const { userName } = req.method === 'GET' ? req.query : req.body;
		const exist = await User.findOne({ userName: userName });
		if (!exist) return res.status(404).send({ error: 'User not found' });
		next();
	} catch (error) {
		return res.status(404).send({ error: 'Authentication Error' });
	}
};

module.exports = verifyUser;
