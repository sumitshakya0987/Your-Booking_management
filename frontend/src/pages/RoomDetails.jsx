import React from 'react'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
  const { id } = useParams()

  // Simulated room data
  const room = { id, name: 'Room 1', location: 'New York', price: 120, type: 'Single' }

  return (
    <div>
      <h3>Room Details: {room.name}</h3>
      <p>
        Location: {room.location} <br />
        Price: ${room.price} per night <br />
        Type: {room.type}
      </p>
      <button className="btn btn-success">Book Room</button>
    </div>
  )
}

export default RoomDetails
