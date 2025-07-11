const Message = require('../Models/message');

exports.getMessages = async (req, res) => {
    const messages = await Message.find({ room: req.params.roomId })
        .populate('sender', 'username')
        .sort({ createdAt: 1 });

    res.status(200).json({ messages });
};