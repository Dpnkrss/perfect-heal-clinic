const express = require("express");
const {
  loginController,
  registerController,
  authController,
  scheduleController,
  userAppointmentsController,
  slotController,
} = require("../controllers/docCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//LOGIN
router.post("/login", loginController);
//REGISTER
router.post("/register", registerController);
//AUTH
router.post("/getDocData", authMiddleware, authController);
//Schedule
router.post("/my-schedule", authMiddleware, scheduleController);
// Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);
//get Slots
router.get("/:docSpeciality", slotController);

module.exports = router;
