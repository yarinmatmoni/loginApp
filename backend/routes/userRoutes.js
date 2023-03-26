const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const Auth = require('../common/authMiddleware');
const VerifyUser = require('../common/verifyUserMiddleWare');

router.get('/:userName', User.getUser);

router.put('/updateUser/', Auth, User.updateUser);

router.put('/resetPassword', VerifyUser, User.resetPassword);

module.exports = router;
