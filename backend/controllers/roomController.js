const Room = require('../models/Room');

// Example controller functions
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms' });
  }
};

const bookRoom = async (req, res) => {
  try {
    const { roomId, guestDetails } = req.body;
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    // Handle booking logic here
    res.status(200).json({ message: 'Room booked successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Error booking room' });
  }
};

module.exports = {
  getRooms,
  bookRoom,
};
