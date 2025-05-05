import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'
import Profile from './pages/Profile'
import Reservation from './pages/Reservation'
import Login from './pages/Login'  // Import the Login component

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:id" element={<RoomDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reservation/:id" element={<Reservation />} />
      <Route path="/login" element={<Login />} /> {/* Add login route */}
    </Routes>
  )
}

export default RoutesComponent
