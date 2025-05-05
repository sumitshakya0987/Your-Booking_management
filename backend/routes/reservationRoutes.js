const express = require('express');
const router = express.Router();
const { createReservation } = require('../controllers/reservationController');

// POST request for creating a reservation
router.post('/', createReservation);

module.exports = router;
