const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ room: req.params.roomId })
            .populate('sender', 'username')
            .sort({ timestamp: 1 });
        
        res.status(200).json({ messages });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};