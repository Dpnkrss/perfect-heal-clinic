import { useState } from "react";
import Welcome from "../components/Welcome/Welcome";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import axios from "axios";

const Schedule = () => {
  const [doctorSchedule, setDoctorSchedule] = useState({
    weekly_schedule: [
      {
        day: "Sunday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
      {
        day: "Monday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
      {
        day: "Tuesday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
      {
        day: "Wednesday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
      {
        day: "Thursday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
      {
        day: "Friday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
      {
        day: "Saturday",
        working_hours: [{ start_time: "08:00", end_time: "08:00" }],
      },
    ],
  });
  const { doctor } = useSelector((state) => state.doctor);
  const doctorName = doctor?.fullName;
  const docId = doctor?._id;
  const docSpeciality = doctor?.speciality;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (time, dayIndex, timeIndex, type) => {
    setDoctorSchedule((prevSchedule) => {
      const updatedSchedule = { ...prevSchedule };
      updatedSchedule.weekly_schedule[dayIndex].working_hours[timeIndex][type] =
        time;
      return updatedSchedule;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    try {
      const res = await axios.post(
        "/api/v1/doctor/my-schedule",
        {
          docId,
          doctorName,
          docSpeciality,
          weekly_schedule: doctorSchedule.weekly_schedule,
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
    console.log(doctorSchedule);
  };

  return (
    <Welcome>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">
          Doctor Weekly Schedule Form
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          {doctorSchedule.weekly_schedule.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="flex space-x-4 items-center mb-4">
              <h4 className="text-lg pr-9 font-semibold mb-2">
                {daySchedule.day}
              </h4>
              <div className="flex space-x-4">
                <div>
                  <label
                    htmlFor={`start_time-${dayIndex}-0`}
                    className="block mb-2 font-medium"
                  >
                    Start Time:
                  </label>
                  <TimePicker
                    id={`start_time-${dayIndex}-0`}
                    name="start_time"
                    placeholder="Enter start time"
                    secondHandLength={0}
                    minDetail="hour"
                    maxDetail="hour"
                    value={daySchedule.working_hours[0].start_time}
                    onChange={(time) =>
                      handleChange(time, dayIndex, 0, "start_time")
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`end_time-${dayIndex}-0`}
                    className="block mb-2 font-medium"
                  >
                    End Time:
                  </label>
                  <TimePicker
                    id={`end_time-${dayIndex}-0`}
                    name="end_time"
                    placeholder="Enter end time"
                    secondHandLength={0}
                    minDetail="hour"
                    maxDetail="hour"
                    value={daySchedule.working_hours[0].end_time}
                    onChange={(time) =>
                      handleChange(time, dayIndex, 0, "end_time")
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </Welcome>
  );
};

export default Schedule;
