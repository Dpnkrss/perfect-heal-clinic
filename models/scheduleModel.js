const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  doctorName: {
    type: mongoose.Schema.Types.String,
    ref: "Doctor",
    required: true,
  },
  startDay: {
    type: String,
    required: true,
  },
  endDay: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});
const scheduleModel = mongoose.model("Schedule", scheduleSchema);
module.exports = scheduleModel;
