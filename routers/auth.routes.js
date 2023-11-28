const express = require('express');
const authController = require('../controller/authController')
const router = express.Router();

/* /auth */
router.get('/login', authController.login)


module.exports = router