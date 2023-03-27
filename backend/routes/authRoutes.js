const express = require('express');
const router = express.Router();
const Auth = require('../controllers/auth');
const sendMail = require('../common/sendMail');

router.post('/register', Auth.register, sendMail);

router.post('/login', Auth.login);

module.exports = router;
