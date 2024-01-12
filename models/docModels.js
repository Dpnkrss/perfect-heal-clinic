const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  speciality: {
    type: String,
    required: [true, "Speciality is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  notification: {
    type: Array,
    default: [],
  },
  notificationSeen: {
    type: Array,
    default: [],
  },
});

const docModel = mongoose.model("doctors", docSchema);

module.exports = docModel;
