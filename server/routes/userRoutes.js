const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser )
router.post('/login', loginUser)

module.exports = router;