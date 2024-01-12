const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  docId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  doctorName: { type: mongoose.Schema.Types.String, ref: "Doctor" },
  docSpeciality: { type: mongoose.Schema.Types.String, ref: "Doctor" },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const slotModel = mongoose.model("Slot", slotSchema);

module.exports = slotModel;
