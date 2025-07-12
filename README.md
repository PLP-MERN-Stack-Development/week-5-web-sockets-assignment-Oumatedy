# 🚀 Real-Time Chat Application

A comprehensive real-time chat application built with Socket.io, React, and Node.js featuring multiple chat rooms, private messaging, file sharing, and advanced notification systems.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Socket Events](#-socket-events)
- [Frontend Components](#-frontend-components)
- [Backend Architecture](#-backend-architecture)
- [Database Schema](#-database-schema)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## ✨ Features

### Core Features
- **Real-time messaging** with Socket.io
- **User authentication** (username-based and JWT)
- **Multiple chat rooms** with room management
- **Private messaging** between users
- **Online/offline status** indicators
- **Typing indicators** with user identification
- **Message timestamps** and sender information

### Advanced Features
- **File and image sharing** with drag-and-drop support
- **Message reactions** (like, love, laugh, etc.)
- **Read receipts** for delivered messages
- **Message search** functionality
- **Message pagination** for chat history
- **Unread message counters**
- **Sound notifications** for new messages
- **Browser push notifications**
- **Auto-reconnection** on connection loss
- **Message delivery acknowledgment**
- **Responsive design** for desktop and mobile

### UI/UX Features
- **Dark/Light theme** toggle
- **Emoji picker** integration
- **Message formatting** (bold, italic, links)
- **User mention** system (@username)
- **Custom user avatars**
- **Loading states** and error handling
- **Smooth animations** and transitions

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Multer** - File upload handling
- **Bcrypt** - Password hashing
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend
- **React** - Frontend library
- **Socket.io-client** - Real-time client
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **React Hook Form** - Form management
- **React Hot Toast** - Notifications
- **Framer Motion** - Animations
- **React Icons** - Icon library

### Development Tools
- **Nodemon** - Development server
- **Vite** - Build tool
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Supertest** - API testing

## 📁 Project Structure

```
chat-app/
├── server/
│   ├── config/
│   │   ├── database.js
│   │   └── socket.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── messageController.js
│   │   ├── roomController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── upload.js
│   │   └── validation.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Message.js
│   │   └── Room.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── messages.js
│   │   ├── rooms.js
│   │   └── users.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── uploads/
│   ├── tests/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat/
│   │   │   │   ├── ChatRoom.jsx
│   │   │   │   ├── MessageList.jsx
│   │   │   │   ├── MessageInput.jsx
│   │   │   │   └── TypingIndicator.jsx
│   │   │   ├── UI/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Loading.jsx
│   │   │   ├── Layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── Auth/
│   │   │       ├── Login.jsx
│   │   │       └── Register.jsx
│   │   ├── hooks/
│   │   │   ├── useSocket.js
│   │   │   ├── useAuth.js
│   │   │   └── useChat.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── socket.js
│   │   │   └── auth.js
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   └── constants.js
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── README.md
└── .gitignore
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **pnpm** (v8.0.0 or higher)
- **MongoDB** (v6.0.0 or higher) - Local installation or MongoDB Atlas
- **Git** (for version control)

### System Requirements
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB free space
- **OS**: Windows 10+, macOS 10.14+, or Linux

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### 2. Install Server Dependencies
```bash
cd server
npm install
# or
pnpm install
```

### 3. Install Client Dependencies
```bash
cd ../client
npm install
# or
pnpm install
```

## 🔧 Environment Setup

### Server Environment (.env)
Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/chatapp
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Socket.io Configuration
SOCKET_CORS_ORIGIN=http://localhost:3000

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Redis Configuration (Optional - for scaling)
REDIS_URL=redis://localhost:6379
```

### Client Environment (.env)
Create a `.env` file in the `client` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000

# App Configuration
VITE_APP_NAME=ChatApp
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_FILE_UPLOAD=true
VITE_MAX_FILE_SIZE=10485760
```

## 🏃‍♂️ Running the Application

### Development Mode

#### Option 1: Run Both Servers Simultaneously
```bash
# Install concurrently globally (if not already installed)
npm install -g concurrently

# From the root directory
npm run dev
```

#### Option 2: Run Servers Separately
```bash
# Terminal 1 - Start the backend server
cd server
npm run dev

# Terminal 2 - Start the frontend server
cd client
npm run dev
```

### Production Mode
```bash
# Build the client
cd client
npm run build

# Start the production server
cd ../server
npm start
```

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Socket.io**: ws://localhost:5000

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Room Endpoints

#### Get All Rooms
```http
GET /api/rooms
Authorization: Bearer <token>
```

#### Create Room
```http
POST /api/rooms
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "General Chat",
  "description": "General discussion room"
}
```

#### Join Room
```http
POST /api/rooms/:roomId/join
Authorization: Bearer <token>
```

### Message Endpoints

#### Get Messages
```http
GET /api/messages/:roomId?page=1&limit=20
Authorization: Bearer <token>
```

#### Send Message
```http
POST /api/messages
Authorization: Bearer <token>
Content-Type: application/json

{
  "roomId": "room-id",
  "content": "Hello, world!",
  "type": "text"
}
```

#### Upload File
```http
POST /api/messages/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <file>
roomId: <room-id>
```

## 🔌 Socket Events

### Client to Server Events

| Event | Description | Payload |
|-------|-------------|---------|
| `join-room` | Join a chat room | `{ roomId: string }` |
| `leave-room` | Leave a chat room | `{ roomId: string }` |
| `send-message` | Send a message | `{ roomId: string, content: string, type: string }` |
| `start-typing` | Start typing indicator | `{ roomId: string }` |
| `stop-typing` | Stop typing indicator | `{ roomId: string }` |
| `private-message` | Send private message | `{ recipientId: string, content: string }` |
| `mark-read` | Mark message as read | `{ messageId: string }` |
| `user-status` | Update user status | `{ status: 'online' | 'away' | 'busy' }` |

### Server to Client Events

| Event | Description | Payload |
|-------|-------------|---------|
| `message-received` | New message received | `{ message: Object }` |
| `user-joined` | User joined room | `{ user: Object, roomId: string }` |
| `user-left` | User left room | `{ user: Object, roomId: string }` |
| `user-typing` | User is typing | `{ user: Object, roomId: string }` |
| `user-stopped-typing` | User stopped typing | `{ user: Object, roomId: string }` |
| `private-message` | Private message received | `{ message: Object }` |
| `message-read` | Message read receipt | `{ messageId: string, readBy: string }` |
| `user-status-changed` | User status updated | `{ user: Object, status: string }` |
| `notification` | System notification | `{ type: string, message: string }` |

## 🎨 Frontend Components

### Main Components

#### App.jsx
Main application component handling routing and global state.

#### ChatRoom.jsx
Main chat interface component with message list and input.

#### MessageList.jsx
Displays messages with infinite scrolling and real-time updates.

#### MessageInput.jsx
Input component with emoji picker, file upload, and message formatting.

#### UserList.jsx
Displays online users and their status.

#### RoomList.jsx
Shows available rooms and unread message counts.

### Custom Hooks

#### useSocket.js
```javascript
import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

export const useSocket = (serverUrl, options = {}) => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(serverUrl, options);
    return () => socketRef.current?.disconnect();
  }, [serverUrl]);

  return socketRef.current;
};
```

#### useAuth.js
```javascript
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

## 🏗️ Backend Architecture

### Server Structure

#### server.js
Main server file with Express setup and Socket.io integration.

#### Database Connection
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
```

#### Socket.io Configuration
```javascript
const { Server } = require('socket.io');

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.SOCKET_CORS_ORIGIN,
      credentials: true,
    },
  });

  io.use(authenticateSocket);
  
  io.on('connection', (socket) => {
    console.log('User connected:', socket.user.username);
    
    socket.on('join-room', handleJoinRoom);
    socket.on('send-message', handleSendMessage);
    socket.on('disconnect', handleDisconnect);
  });

  return io;
};
```

## 🗃️ Database Schema

### User Schema
```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  status: { type: String, enum: ['online', 'away', 'busy', 'offline'], default: 'offline' },
  lastSeen: { type: Date, default: Date.now },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
}, { timestamps: true });
```

### Room Schema
```javascript
const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  type: { type: String, enum: ['public', 'private'], default: 'public' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
}, { timestamps: true });
```

### Message Schema
```javascript
const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  type: { type: String, enum: ['text', 'image', 'file'], default: 'text' },
  fileUrl: { type: String },
  fileName: { type: String },
  reactions: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['like', 'love', 'laugh', 'angry'] },
  }],
  readBy: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    readAt: { type: Date, default: Date.now },
  }],
  edited: { type: Boolean, default: false },
  editedAt: { type: Date },
}, { timestamps: true });
```

## 🧪 Testing

### Running Tests

#### Backend Tests
```bash
cd server
npm test

# Run specific test file
npm test -- --testNamePattern="auth"

# Run with coverage
npm run test:coverage
```

#### Frontend Tests
```bash
cd client
npm test

# Run in watch mode
npm test -- --watch

# Run with coverage
npm run test:coverage
```

### Test Structure

#### API Tests
```javascript
describe('Auth API', () => {
  test('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.user.username).toBe('testuser');
  });
});
```

#### Socket Tests
```javascript
describe('Socket Events', () => {
  test('should handle message sending', (done) => {
    const clientSocket = io('http://localhost:5000');
    
    clientSocket.on('message-received', (data) => {
      expect(data.content).toBe('Hello, world!');
      done();
    });
    
    clientSocket.emit('send-message', {
      roomId: 'test-room',
      content: 'Hello, world!'
    });
  });
});
```

## 🚀 Deployment

### Environment Setup

#### Production Environment Variables
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp
JWT_SECRET=your-production-jwt-secret
SOCKET_CORS_ORIGIN=https://your-domain.com
```

### Deployment Options

#### Option 1: Heroku Deployment
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret

# Deploy
git push heroku main
```

#### Option 2: Digital Ocean Deployment
```bash
# Create droplet and connect via SSH
ssh root@your-server-ip

# Install Node.js and MongoDB
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y mongodb

# Clone and setup project
git clone https://github.com/yourusername/chat-app.git
cd chat-app
npm install
npm run build

# Setup PM2 for process management
npm install -g pm2
pm2 start server.js --name "chat-app"
pm2 startup
pm2 save
```

#### Option 3: Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build client
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/chatapp
    depends_on:
      - mongo
    volumes:
      - ./uploads:/app/uploads

  mongo:
    image: mongo:6.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Run tests: `npm test`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Code Style
- Use ESLint and Prettier for code formatting
- Follow conventional commit messages
- Write meaningful commit messages
- Add JSDoc comments for functions
- Keep functions small and focused

### Pull Request Process
1. Ensure all tests pass
2. Update documentation if needed
3. Add screenshots for UI changes
4. Request review from maintainers
5. Address feedback promptly

## 🐛 Troubleshooting

### Common Issues

#### Connection Issues
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Check if ports are available
netstat -tulpn | grep :5000
netstat -tulpn | grep :3000
```

#### Socket Connection Problems
```javascript
// Add connection error handling
socket.on('connect_error', (error) => {
  console.error('Socket connection error:', error);
});

// Add reconnection logic
socket.on('disconnect', () => {
  console.log('Socket disconnected, attempting to reconnect...');
});
```

#### CORS Issues
```javascript
// Server-side CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Socket.io CORS configuration
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});
```

#### File Upload Issues
```javascript
// Check file size limits
const multer = require('multer');
const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});
```

### Performance Optimization

#### Database Optimization
```javascript
// Add indexes for better query performance
messageSchema.index({ room: 1, createdAt: -1 });
userSchema.index({ username: 1 });
roomSchema.index({ members: 1 });
```

#### Socket.io Optimization
```javascript
// Use namespaces for better organization
const chatNamespace = io.of('/chat');
const notificationNamespace = io.of('/notifications');

// Use rooms for targeted messaging
socket.join(`room-${roomId}`);
io.to(`room-${roomId}`).emit('message-received', message);
```

#### Frontend Optimization
```javascript
// Implement message virtualization for large lists
import { FixedSizeList as List } from 'react-window';

// Use React.memo for expensive components
const MessageItem = React.memo(({ message }) => {
  return <div>{message.content}</div>;
});

// Implement debouncing for typing indicators
const debouncedStopTyping = debounce(() => {
  socket.emit('stop-typing', { roomId });
}, 1000);
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Socket.io](https://socket.io/) for real-time communication
- [React](https://reactjs.org/) for the frontend framework
- [Express.js](https://expressjs.com/) for the backend framework
- [MongoDB](https://www.mongodb.com/) for the database
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📧 Support

If you have any questions or need help, please:
email: oumatedy@gmail.com
---

**Happy Chatting! 🎉**