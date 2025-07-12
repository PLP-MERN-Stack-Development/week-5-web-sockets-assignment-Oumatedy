import axios from 'axios';
import { io } from 'socket.io-client';

const BackendBaseURL = 'http://localhost:5000';
const APIBaseURL = 'http://localhost:5000/api';


const APIs = axios.create({
    baseURL: APIBaseURL,
    });

export const registerUser = (username) => 
    APIs.post('/auth/register', { username });

export const getRooms = () =>
    APIs.get('/rooms');

export const createRoom = (name) =>
    APIs.post('/rooms', { name });

export const getMessages = (roomId) =>
    APIs.get(`/messages/${roomId}`);

export const socket = io(BackendBaseURL, {
    autoConnect: false,
})