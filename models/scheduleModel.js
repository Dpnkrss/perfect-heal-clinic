const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  doctorName: {
    type: mongoose.Schema.Types.String,
    ref: "Doctor",
    required: true,
  },
  docId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  docSpeciality: {
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
scheduleSchema.methods.generateSlots = function () {
  const slots = [];
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const {
    docId,
    doctorName,
    docSpeciality,
    startDay,
    endDay,
    startTime,
    endTime,
  } = this;

  const startDayIndex = weekdays.indexOf(startDay);
  const endDayIndex = weekdays.indexOf(endDay);

  for (let i = startDayIndex; i <= endDayIndex; i++) {
    const currentDay = weekdays[i];

    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const totalMinutes = (endHour - startHour) * 60 + (endMinute - startMinute);

    for (let j = 0; j < totalMinutes; j += 30) {
      const slotStartTime = new Date(0, 0, 0, startHour, startMinute + j);
      const slotEndTime = new Date(0, 0, 0, startHour, startMinute + j + 30);
      const slot = {
        docId,
        doctorName,
        docSpeciality,
        day: currentDay,
        startTime: slotStartTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        endTime: slotEndTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      slots.push(slot);
    }
  }
  return slots;
};
const scheduleModel = mongoose.model("Schedule", scheduleSchema);
module.exports = scheduleModel;
