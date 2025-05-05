import React from 'react'
import { useParams } from 'react-router-dom'

const Reservation = () => {
  const { id } = useParams()

  // Simulated reservation data
  const reservation = { id, room: 'Room 1', location: 'New York', date: '2025-05-05' }

  return (
    <div>
      <h3>Reservation Details</h3>
      <p>
        Room: {reservation.room} <br />
        Location: {reservation.location} <br />
        Date: {reservation.date}
      </p>
      <button className="btn btn-danger">Cancel Reservation</button>
    </div>
  )
}

export default Reservation
