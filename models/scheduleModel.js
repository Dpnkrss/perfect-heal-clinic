const mongoose = require("mongoose");

const workingHoursSchema = new mongoose.Schema({
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
});

const scheduleSchema = new mongoose.Schema({
  docId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  doctorName: {
    type: mongoose.Schema.Types.String,
    ref: "Doctor",
    required: true,
  },
  docSpeciality: {
    type: mongoose.Schema.Types.String,
    ref: "Doctor",
    required: true,
  },
  weekly_schedule: [
    {
      day: { type: String, required: true },
      working_hours: [workingHoursSchema],
    },
  ],
});
scheduleSchema.methods.generateSlotsForWeek = function (slotDuration) {
  const { docId, doctorName, docSpeciality, weekly_schedule } = this;
  const slots = [];

  weekly_schedule.forEach((daySchedule) => {
    const { day, working_hours } = daySchedule;
    const startTime = new Date(
      `January 1, 2000 ${working_hours[0].start_time}`
    );
    const endTime = new Date(`January 1, 2000 ${working_hours[0].end_time}`);

    let currentSlot = new Date(startTime);

    while (currentSlot < endTime) {
      const slotEndTime = new Date(
        currentSlot.getTime() + slotDuration * 60000
      ); // Convert minutes to milliseconds
      slots.push({
        docId,
        doctorName,
        docSpeciality,
        day,
        startTime: currentSlot.toLocaleTimeString([], { timeStyle: "short" }),
        endTime: slotEndTime.toLocaleTimeString([], { timeStyle: "short" }),
      });
      currentSlot = slotEndTime;
    }
  });

  return slots;
};

const scheduleModel = mongoose.model("Schedule", scheduleSchema);
module.exports = scheduleModel;
