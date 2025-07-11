const Message = require('../models/Message');
const User = require('../models/User');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log("Socket connected: ", socket.id);

        // Handle joining a room
        socket.on('joinRoom', async ({ username, roomId }) => {
            const user = await User.findOneAndUpdate(
                { username },
                { socketId: socket.id, isOnline: true },
                { new: true }
            );

            socket.join(roomId);
            io.to(roomId).emit('userJoined', { user, roomId });
        });

            // Handle sending a message and typing
            socket.on('typing', ({ roomId, username, isTyping }) => {
                socket.to(roomId).emit('typing', { username, isTyping });
            });
    
            socket.on("stopTyping", ({ roomId, username }) => {
                socket.to(roomId).emit('stopTyping', { username });
            });
    
            // Handle sending a message
            socket.on('sendMessage', async ({ content, roomId, username }) => {
                const user = await User.findOne({ username });
                if (!user) return;
                const message = await Message.create({
                    content: content,
                    room: roomId,
                    sender: user._id
                });
                const fullMessage = await Message.findById(message._id).populate("sender", "username");
                io.to(roomId).emit('newMessage', fullMessage);
            });
    
            // Handle disconnecting
            socket.on('disconnect', async () => {
                const offlineUser = await User.findOneAndUpdate(
                    { socketId: socket.id },
                    { isOnline: false },
                    { new: true }
                );
                if (offlineUser) {
                    io.emit("userOffline", offlineUser.username);
                }
            });
        });
    };

    


