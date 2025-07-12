import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {registerUser} from "../services/backendInt";

export default function Login({setUser}) {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await registerUser(username);
            setUser(res.data);
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100"> 
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-lg font-bold mb-4">Join Chat</h2>
                <input
                    className="w-full p-2 border rounded mb-4"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </div>
        </div>
    );
}

