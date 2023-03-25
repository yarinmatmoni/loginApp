const otpGenerator = require('otp-generator');

const generateOTP = async (req, res) => {
	req.app.locals.OTP = await otpGenerator.generate(6, {
		lowerCaseAlphabets: false,
		upperCaseAlphabets: false,
		specialChars: false,
	});

	res.status(200).send({ code: req.app.locals.OTP });
};

const verifyOTP = async (req, res) => {
	const { code } = req.query;
	if (parseInt(req.app.locals.OTP) === parseInt(code)) {
		req.app.locals.OTP = null;
		req.app.locals.resetSession = true;
		return res.status(200).send('Verify Successfully');
	}
	return res.status(400).send({ error: 'Invalid OTP' });
};

const resetSession = async (req, res) => {
	if (req.app.locals.resetSession) {
		req.app.locals.resetSession = false;
		return res.status(200).send('Access granted');
	}
	return res.status(440).send({ error: 'Session expired' });
};

module.exports = { generateOTP, verifyOTP, resetSession };
