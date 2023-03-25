const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	userName: {
		type: String,
		require: [true, 'Please provide unique Username'],
		unique: [true, 'Username exist'],
	},
	email: {
		type: String,
		require: [true, 'Please provide unique Email'],
		unique: [true],
	},
	birthday: { type: Date },
	password: {
		type: String,
		require: [true, 'Please provide a Password'],
		unique: false,
	},
	profileImage: { type: String },
});

module.exports = mongoose.model('User', userSchema);
