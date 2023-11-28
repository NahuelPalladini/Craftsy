const express = require('express');
const usersController = require('../controller/usersController');
const router = express.Router();

/* /users */
router.get('/register',usersController.register);
router.get('/profile',usersController.profile);

module.exports = router