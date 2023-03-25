const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
	const authHeaders = req.headers.authorization;
	const token = authHeaders && authHeaders.split(' ')[1];
	if (token === null) return res.status(401).send('Authentication failed');
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
		if (error) return res.status(403).send(error.message);
		req.user = user;
		next();
	});
};

module.exports = authenticate;
