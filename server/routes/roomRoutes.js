const express = require('express');
const router = express.Router();
const { getRooms, createRoom } = require('../controllers/roomController');

// Route to get all rooms
router.get('/', getRooms);

// Route to create a new room
router.post('/', createRoom);

module.exports = router;