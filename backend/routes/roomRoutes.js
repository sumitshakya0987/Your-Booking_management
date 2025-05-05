const express = require('express');
const router = express.Router();

// Import controller functions
const roomController = require('../controllers/roomController');

// Define routes
router.get('/rooms', roomController.getRooms);        // Ensure the controller function is correctly imported
router.post('/book', roomController.bookRoom);        // Same for this one
// Add other routes as necessary

module.exports = router;
