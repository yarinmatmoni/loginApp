const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

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

		newUser.save(async (error, newUser) => {
			if (error) return res.status(400).send(error.message);
			//////////
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
			return res.status(200).send('Email sent');
			//////////
			// res.status(200).send(newUser);
		});
	} catch (error) {
		return res.status(500).send(error);
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		if (!user) return res.status(404).send({ error: 'User not found' });

		const match = await bcrypt.compare(password, user.password);
		if (!match) return res.status(401).send({ error: 'Email or/and Password incorrect' });

		const accessToken = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: process.env.JWT_TOKEN_EXPIRATION,
		});

		res.status(200).send({ accessToken: accessToken });
	} catch (error) {
		return res.status(500).send({ error });
	}
};

module.exports = { register, login };
