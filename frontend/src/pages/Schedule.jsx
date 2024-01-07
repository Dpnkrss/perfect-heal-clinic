import Welcome from "../components/Welcome/Welcome";
import { useSelector } from "react-redux";
import { useState } from "react";
import TimePicker from "react-time-picker";

const Schedule = () => {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("");

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle the form submission here
    console.log("Form submitted:", { startDay, endDay, startTime, endTime });
  };
  const { doctor } = useSelector((state) => state.doctor);
  return (
    <Welcome>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {" "}
          {doctor?.fullName.split(" ")[0]}
          {"'"}s Schedule
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="startDay"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Start Day
            </label>
            <select
              id="startDay"
              className="w-full p-2 border border-gray-300 rounded"
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
            >
              <option value="" disabled>
                Select a day
              </option>
              {weekdays.map((weekday) => (
                <option key={weekday} value={weekday}>
                  {weekday}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="endDay"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              End Day
            </label>
            <select
              id="endDay"
              className="w-full p-2 border border-gray-300 rounded"
              value={endDay}
              onChange={(e) => setEndDay(e.target.value)}
            >
              <option value="" disabled>
                Select a day
              </option>
              {weekdays.map((weekday) => (
                <option key={weekday} value={weekday}>
                  {weekday}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="startTime"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Start Time
            </label>
            <TimePicker
              id="startTime"
              placeholder="Enter start time"
              className="w-full p-2 border border-gray-300"
              value={startTime}
              minDetail="hour"
              maxDetail="hour"
              onChange={(val) => setStartTime(val)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="endTime"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              End Time
            </label>
            <input
              type="text"
              id="endTime"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter end time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 mx-auto block text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </Welcome>
  );
};

export default Schedule;
