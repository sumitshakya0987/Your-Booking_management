// RoomCard.jsx
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function RoomCard({ room }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={room.imageUrl || 'https://via.placeholder.com/300x200'}
        className="card-img-top"
        alt={room.name}
      />
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">{room.description}</p>
        <p className="card-text">
          <strong>Price:</strong> ${room.pricePerNight} / night
        </p>
        <button className="btn btn-primary" onClick={handleShowModal}>
          Book Room
        </button>
      </div>

      <BookingModal
        show={showModal}
        handleClose={handleCloseModal}
        roomId={room._id}
      />
    </div>
  );
}

export default RoomCard;
