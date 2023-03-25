const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const Auth = require('../common/authMiddleware');

router.get('/:userName', User.getUser);

router.put('/updateUser/', Auth, User.updateUser);

module.exports = router;
