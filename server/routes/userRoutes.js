const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser )
router.post('/login', loginUser)
router.get('/me', protect, getMe);

module.exports = router;