const express = require('express');
const { appointmentController } = require('../controllers/appointmentCtrl');

//router object
const router = express.Router();

//Appointment
router.post('/appointment', appointmentController);

module.exports = router;
