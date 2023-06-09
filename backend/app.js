const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json());
app.use(cors());

// connect to mongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => {
	console.log(error);
});

db.once('open', () => {
	console.log('Connected to mongoDB');
});

const authRouter = require('./routes/authRoutes');
app.use('/auth', authRouter);

const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter);

const OTPRouter = require('./routes/OTPRoutes');
app.use('/OTP', OTPRouter);

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});
