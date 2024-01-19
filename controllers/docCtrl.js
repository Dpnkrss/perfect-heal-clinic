const docModel = require("../models/docModels");
const scheduleModel = require("../models/scheduleModel");
const slotModel = require("../models/slotModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const appointmentModel = require("../models/appointmentModel");
//login
const loginController = async (req, res) => {
  try {
    const doctor = await docModel.findOne({ email: req.body.email });
    if (!doctor) {
      return res.status(200).send({
        message: "No doctor existing with these credentials",
        success: false,
      });
    }
    const matchPwd = await bcrypt.compare(req.body.password, doctor.password);
    if (!matchPwd) {
      return res
        .status(200)
        .send({ message: "Invalid Email or Password", success: false });
    }
    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in login ctrl ${error.message}` });
  }
};
//register
const registerController = async (req, res) => {
  try {
    const existingDoctor = await docModel.findOne({ email: req.body.email });
    if (existingDoctor) {
      return res
        .status(200)
        .send({ message: "Already existing", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newDoctor = new docModel(req.body);
    await newDoctor.save();
    res.status(201).send({ message: "Registered Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};
const authController = async (req, res) => {
  try {
    const doctor = await docModel.findById({ _id: req.body.docId });
    doctor.password = undefined;
    if (!doctor) {
      return res.status(200).send({
        message: "Doctor not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: doctor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Auth Error",
      success: false,
      error,
    });
  }
};
const scheduleController = async (req, res) => {
  try {
    const { docId, doctorName, docSpeciality, weekly_schedule } = req.body;
    const schedule = new scheduleModel({
      docId,
      doctorName,
      docSpeciality,
      weekly_schedule,
    });
    await schedule.save();
    const generateSlots = schedule.generateSlotsForWeek(30);
    await slotModel.insertMany(generateSlots);
    res.status(201).send({
      schedule,
      message: "Schedule posted Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while adding schedule",
    });
  }
};
const userAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.status(200).send({
      success: true,
      message: "Users Appointments Fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In User Appointments",
    });
  }
};
const slotController = async (req, res) => {
  const { docSpeciality, day } = req.params;
  try {
    const slots = await slotModel.find({
      $and: [{ docSpeciality: docSpeciality }, { day: day }],
    });
    res.status(200).send({
      success: true,
      message: "Slots Fetched",
      data: slots,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In User Appointments",
    });
  }
};
module.exports = {
  loginController,
  registerController,
  authController,
  scheduleController,
  userAppointmentsController,
  slotController,
};
