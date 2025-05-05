
import React, { useState } from 'react'

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('')
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [roomType, setRoomType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch({ location, checkInDate, checkOutDate, roomType })
  }

  return (
    <form onSubmit={handleSubmit} className="form-inline my-4">
      <div className="form-group mr-2">
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-group mr-2">
        <input
          type="date"
          className="form-control"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="form-group mr-2">
        <input
          type="date"
          className="form-control"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div className="form-group mr-2">
        <select
          className="form-control"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="">Room Type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  )
}

export default SearchForm
