Hotel Booking Management System:

A hotel booking system where users can search for hotels, check room availability, book rooms, and manage reservations. Built with React, Node.js, Express, and MongoDB.
Project Setup
Prerequisites
Before running the project, ensure that you have the following installed:

Node.js (v14 or higher)

MongoDB (or a MongoDB Atlas account)

npm (usually comes with Node.js)
```bash
git clone https://github.com/yourusername/hotel-booking-management-system.git
cd hotel-booking-management-system
```
Backend Setup (Node.js, Express, MongoDB)
```bash
cd backend
```
```bash
npm install
```
3. Set up Environment Variables
Create a .env file in the backend directory to store your environment variables.

Example .env file:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
```bash
npm run start
```
The backend server should now be running on http://localhost:5000.
Frontend Setup (React, Bootstrap)
1. Navigate to the frontend directory
```bash
2. cd frontend
```
```bash
npm install
```
```bash
npm run dev
```
```bash
API Routes
```
```bash
Backend API Routes:
POST /api/auth/register - Register a new user

POST /api/auth/login - User login (returns JWT token)

GET /api/hotels - Get a list of hotels

POST /api/reservations - Create a new reservation (book a room)
```


