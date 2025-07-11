const Room = require('../Models/roomModel');

exports.getRoom = async (req, res) => {
    const rooms = await Room.find();
    res.status(200).json({ rooms });
};

exports.createNewRoom = async (req, res) => {
    const { name } = req.body;

    try {
        const room = await Room.create({ name });
        res.status(201).json({ room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
