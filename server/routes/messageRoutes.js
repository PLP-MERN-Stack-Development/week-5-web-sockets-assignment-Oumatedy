const express = require('express');
const router = express.Router();
const { getMessages } = require('../controllers/messageController');

// Route to get messages for a specific room
router.get('/:roomId', getMessages);

// Export the router
module.exports = router;