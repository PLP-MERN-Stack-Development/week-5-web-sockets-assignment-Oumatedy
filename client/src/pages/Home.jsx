import { useEffect, useState } from "react";
import { getRooms, getMessages, socket } from "../services/backendInt";
import ChatRoom from "../components/ChatRoom";

export default function Home({ user }) {
    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);

    useEffect(() => {
        fetchRooms();
        socket.connect();
        return () => socket.disconnect();
    }, []);

    const fetchRooms = async () => {
        const res = await getRooms();
        setRooms(res.data);
    };

    const handleJoinRoom = async (roomId) => {
        socket.emit("joinRoom", user.username, { roomId: room._Id });
        setCurrentRoom(roomId);
        const res = await getMessages(roomId);
        setMessages(res.data);

    };

    return (
        <div className="flex h-screen">
            <aside className="w-1/4 bg-gray-800 text-white p-4">
                <h2 className="text-lg font-bold mb-4">Chat Rooms</h2>
                <ul>
                    {rooms.map((room) => (
                        <li key={room._id} className="mb-4">
                            <button onClick={() => handleJoinRoom(room._id)} className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded">
                                {room.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="flex-1 p-4">
                {currentRoom ? (
                    <chatRoom
                        roomId={currentRoom}
                        messages={messages}
                        user={user}
                        socket={socket}
                    />
                ) : (
                    <p>Select a room to join</p>
                )}
            </main>
        </div>
    );

}
