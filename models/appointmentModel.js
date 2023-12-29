const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Number is required'],
  },
  specialities: {
    type: String,
    required: [true, 'Specialities is required'],
  },
  appointmentTime: {
    type: String,
    required: [true, 'Appointment Time is required'],
  },
  appointmentDate: {
    type: String,
    required: [true, 'Date is required'],
  },
});

const appointmentModel = mongoose.model('appointments', appointmentSchema);

module.exports = appointmentModel;
