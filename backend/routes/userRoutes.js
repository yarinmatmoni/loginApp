const express = require('express');
const router = express.Router();
const User = require('../controllers/user');

router.get('/:userName', User.getUser);

router.put('/updateUser/', User.updateUser);

module.exports = router;
