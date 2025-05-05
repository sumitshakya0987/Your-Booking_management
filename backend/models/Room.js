const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  occupancy: { type: Number, required: true },
  availableDates: [{ type: Date }],
});

module.exports = mongoose.model('Room', roomSchema);
