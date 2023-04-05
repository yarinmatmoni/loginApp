const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendMail = async (req, res) => {
	const { email, firstName, lastName } = req.userData;

	const config = {
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
	};

	const transporter = nodemailer.createTransport(config);

	const mailGenerator = new Mailgen({
		theme: 'default',
		product: {
			name: 'mailgen',
			link: 'https://mailgen.js/',
		},
	});

	const response = {
		body: {
			intro: 'Welcome!, You are sign up successfully',
		},
	};

	const mail = mailGenerator.generate(response);

	const message = {
		from: process.env.EMAIL,
		to: email,
		subject: `Welcome ${firstName} ${lastName}`,
		html: mail,
	};

	const mailResponse = await transporter.sendMail(message);

	if (!mailResponse) return res.status(500).send({ error });
	return res.status(200).send('User register successfully - check your email');
};

module.exports = sendMail;
