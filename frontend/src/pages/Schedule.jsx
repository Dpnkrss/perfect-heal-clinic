import Welcome from "../components/Welcome/Welcome";
import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";

const Schedule = () => {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("19:00");

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const { doctor } = useSelector((state) => state.doctor);
  const doctorName = doctor?.fullName;
  const docId = doctor?._id;
  const docSpeciality = doctor?.speciality;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(doctor);
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/my-schedule",
        {
          docId,
          doctorName,
          docSpeciality,
          startDay,
          endDay,
          startTime,
          endTime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/welcome");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    // Add your logic to handle the form submission here
    console.log("Form submitted:", { startDay, endDay, startTime, endTime });
  };

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
              className="w-full p-2 border border-gray-300"
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
              className="w-full p-2 border border-gray-300 rounded"
              value={startTime}
              secondHandLength={0}
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
            <TimePicker
              name="hour12"
              id="endTime"
              placeholder="Enter end time"
              className="w-full p-2 border border-gray-300 rounded"
              secondHandLength={0}
              value={endTime}
              minDetail="hour"
              maxDetail="hour"
              onChange={(val) => setEndTime(val)}
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
