import React, { useState } from 'react'
import SearchForm from '../components/SearchForm'
import RoomCard from '../components/RoomCard'

const Home = () => {
  const [rooms, setRooms] = useState([])

  const handleSearch = async (searchData) => {
    // Simulate an API call with static data
    const fetchedRooms = [
      { id: 1, name: 'Room 1', location: 'New York', price: 120, type: 'Single', availability: 'Available' },
      { id: 2, name: 'Room 2', location: 'Los Angeles', price: 150, type: 'Double', availability: 'Available' },
      { id: 3, name: 'Room 3', location: 'Miami', price: 200, type: 'Suite', availability: 'Booked' }
    ]
    setRooms(fetchedRooms)
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div className="row mt-4">
        {rooms.map((room) => (
          <div className="col-md-4" key={room.id}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
