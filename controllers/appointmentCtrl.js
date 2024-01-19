const appointmentModel = require("../models/appointmentModel");
const slotModel = require("../models/slotModel");
const appointmentController = async (req, res) => {
  try {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.validate();
    await newAppointment.save();
    res.status(200).json({
      success: true,
      message: "Appointment created successfully",
      data: newAppointment,
    });
    await slotModel.deleteOne({
      $and: [
        { startTime: req.body.appointmentTime },
        { day: daysOfWeek[new Date(req.body.appointmentDate).getDay()] },
        { docSpeciality: req.body.specialities.split("-")[0] },
      ],
    });
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      // Handle validation errors
      return res.status(400).json({
        success: false,
        message: "Validation error",
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
