const appointmentModel = require('../models/appointmentModel');
const appointmentController = async (req, res) => {
  try {
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.validate(); // Validate the document
    await newAppointment.save();
    console.log('in ', newAppointment);
    res.status(200).json({
      success: true,
      message: 'Appointment created successfully',
      data: newAppointment,
    });
  } catch (error) {
    console.error(error);

    if (error.name === 'ValidationError') {
      // Handle validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: `Appointment Controller ${error.message}`,
    });
  }
};

module.exports = { appointmentController };
