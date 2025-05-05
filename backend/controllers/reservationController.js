const Reservation = require('../models/Reservation'); // Adjust the path if needed

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation({
      ...req.body // Spread the form data that was sent from the client
    });

    await reservation.save();

    res.status(201).json({
      message: 'Reservation created successfully',
      reservation
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create reservation',
      error: error.message
    });
  }
};
