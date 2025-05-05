// BookingModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function BookingModal({ show, handleClose, roomId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, roomId }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Booking successful!');
        handleClose();
      } else {
        alert(`Booking failed: ${data.message}`);
      }
    } catch (error) {
      alert('Booking failed. Try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Check-In</Form.Label>
            <Form.Control name="checkIn" type="date" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Check-Out</Form.Label>
            <Form.Control name="checkOut" type="date" onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleBooking}>Book Now</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingModal;
