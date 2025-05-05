// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();

// Example POST route
router.post('/', async (req, res) => {
  const { roomId, name, email, checkIn, checkOut } = req.body;

  if (!roomId || !name || !email || !checkIn || !checkOut) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // You can save the booking to your DB here (MongoDB or others)
    console.log('Booking received:', req.body);
    return res.status(201).json({ message: 'Booking successful!' });
  } catch (err) {
    return res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
