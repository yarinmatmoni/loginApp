const express = require('express');
const router = express.Router();
const OTP = require('../controllers/OTP');
const VerifyUser = require('../common/verifyUserMiddleWare');
const localVariableOTP = require('../common/OTPMiddleware');

router.get('/generateOTP', VerifyUser, localVariableOTP, OTP.generateOTP);

router.get('/verifyOTP', OTP.verifyOTP);

module.exports = router;
