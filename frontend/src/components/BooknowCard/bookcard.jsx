//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

const BookNow = () => {
  //const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialities: "",
    appointmentTime: "",
    appointmentDate: new Date(),
  });
  const specialtiesOptions = [
    { value: "54", label: "Internal Medicine - Migraine" },
    { value: "53", label: "Internal Medicine - Diabetes" },
    { value: "52", label: "Internal Medicine - Hepatitis" },
    { value: "51", label: "Internal Medicine - Dyspepsia" },
    { value: "50", label: "Internal Medicine - Hypertension" },
    { value: "49", label: "Internal Medicine - Thyroid Disorders" },
    { value: "48", label: "Internal Medicine - Tuberculosis" },
    { value: "47", label: "Internal Medicine - COPD" },
    { value: "46", label: "Internal Medicine - Asthma" },
    { value: "44", label: "Internal Medicine - Chronic Cough" },
    { value: "43", label: "Internal Medicine - Fever" },
    { value: "42", label: "Internal Medicine - Urinary Tract Infections" },
    { value: "41", label: "Orthopaedics- Sports Injuries" },
    { value: "40", label: "Orthopaedics- Rheumatoid Arthritis" },
    { value: "39", label: "Orthopaedics- Bone Fractures" },
    { value: "38", label: "Orthopaedics- Hip & Joint Replacement" },
    { value: "37", label: "Orthopaedics- Arthroscopy" },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData();
  };
  const todayDate = new Date().toISOString().split("T")[0];
  const currentDate = new Date();
  const daysUntilSaturday = 6 - currentDate.getDay();
  const maxDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + daysUntilSaturday
  )
    .toISOString()
    .split("T")[0];
  const [timeSlots, setTimeSlots] = useState([]);

  const getFormData = async () => {
    try {
      const res = await axios.post("/api/v1/doc/appointment", formData);
      if (res.data.success) {
        toast.success("Appointment booked Successfully");
        const updatedSlots = timeSlots.map((slot) =>
          slot.time === formData.appointmentTime
            ? { ...slot, available: false }
            : slot
        );
        setTimeSlots(updatedSlots);
        // navigate("/home");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const docSpeciality = formData.specialities.split("-")[0];
        console.log(docSpeciality.length);
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const appointmentDate = new Date(formData.appointmentDate).getDay();
        console.log(appointmentDate);
        const day = daysOfWeek[appointmentDate + 1];
        const res = await axios.get(`/api/v1/doctor/${docSpeciality}/${day}`);
        toast.success(res.data.message);
        console.log(res.data.data);
        setTimeSlots(res.data.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    if (formData.specialities && formData.appointmentDate) {
      fetchTimeSlots();
    }
  }, [formData.specialities, formData.appointmentDate]);
  return (
    <div
      className="w-[500px] mx-auto p-6 bg-red-600 rounded-lg overflow-hidden shadow-xl h-[500px]  z-10 border border-gray-300"
      style={{
        background: "linear-gradient(to bottom, #F15A2D, #CF2234)",
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h3 className="text-xl mb-4 font-medium text-white text-center">
          Book an Appointment
        </h3>

        {/* Name Input */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-red-300 rounded-md text-gray-700 focus:outline-none focus:border-red-500"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-red-300 rounded-md text-gray-700 focus:outline-none focus:border-red-500"
        />

        {/* Phone Input */}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Mobile"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-red-300 rounded-md text-gray-700 focus:outline-none focus:border-red-500"
        />

        {/* Specialities Select */}
        <select
          id="specialities"
          name="specialities"
          value={formData.specialities}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-red-300 rounded-md text-gray-700 focus:outline-none focus:border-red-500"
        >
          <option value="">Specialities</option>
          {specialtiesOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Appointment Date Input */}
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={formData.appointmentDate}
          min={todayDate}
          max={maxDate}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-red-300 rounded-md text-gray-700 focus:outline-none focus:border-red-500"
        />

        {/* Appointment Time Select */}
        <select
          id="appointmentTime"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-red-300 rounded-md text-gray-700 focus:outline-none focus:border-red-500"
        >
          <option value="">Appointment Time</option>
          {timeSlots?.map((slot) => (
            <option key={slot._id} value={slot.startTime}>
              {slot.startTime + " - " + slot.endTime}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};
export default BookNow;
