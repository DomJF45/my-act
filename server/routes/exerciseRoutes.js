const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { initUser } = require('../controllers/exerciseController');

const router = express.Router();
router.post('/init', protect, initUser);

module.exports = router;