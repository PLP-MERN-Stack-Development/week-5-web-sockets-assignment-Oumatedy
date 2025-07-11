const express = require('express');
const router = express.Router();
const { getRoomMessages } = require('../Controllers/messageController');

// Route to get messages for a specific room
router.get('/:roomId', getRoomMessages);

// Export the router
module.exports = router;
