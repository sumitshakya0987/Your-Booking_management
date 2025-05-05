const User = require('../models/User');

const getProfile = async (req, res) => {
  const userId = req.userId; // User ID is extracted from the JWT token

  try {
    const user = await User.findById(userId).populate('reservations');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      name: user.name,
      email: user.email,
      reservations: user.reservations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfile };
