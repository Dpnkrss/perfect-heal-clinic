const express = require("express");
const {
  loginController,
  registerController,
  authController,
  scheduleController,
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
module.exports = router;
