const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: String,
    email: String,
    checkIn: Date,
    checkOut: Date,
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  });

module.exports = mongoose.model('Reservation', reservationSchema);
