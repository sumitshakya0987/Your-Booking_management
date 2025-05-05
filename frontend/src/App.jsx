import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'
import Profile from './pages/Profile'
import Reservation from './pages/Reservation'

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4 text-center">Hotel Booking Management System</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
