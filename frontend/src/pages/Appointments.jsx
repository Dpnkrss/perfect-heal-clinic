import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get('/api/v1/doctor/user-appointments', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (res.data.success) {
        setAppointments(res.data.data);
      }
      console.log(appointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const getSpecialityText = (specialityValue) => {
    const value = parseInt(specialityValue, 10);
    if (value >= 37 && value <= 41) {
      return 'Orthopaedics';
    } else if (value >= 42 && value <= 54) {
      return 'Internal Medicine';
    } else {
      return 'Unknown Speciality'; // Default text if the value doesn't match any range
    }
  };

  return (
    <div className='text-center mt-8 mb-8'>
      <h1 className='text-3xl font-semibold text-center mb-8'>Appointments</h1>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg inline-block'>
        <table className=' text-base text-gray-500 dark:text-gray-400 mx-auto'>
          <thead className='text-lg text-gray-700 uppercase bg-red-400 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                ID
              </th>
              <th scope='col' className='py-3 px-6'>
                Name
              </th>
              <th scope='col' className='py-3 px-6'>
                Email
              </th>
              <th scope='col' className='py-3 px-6'>
                Phone
              </th>
              <th scope='col' className='py-3 px-6'>
                Specialities
              </th>
              <th scope='col' className='py-3 px-6'>
                Date
              </th>
              <th scope='col' className='py-3 px-6'>
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
              >
                <td className='py-4 px-6'>{appointment._id}</td>
                <td className='py-4 px-6'>{appointment.name}</td>
                <td className='py-4 px-6'>{appointment.email}</td>
                <td className='py-4 px-6'>{appointment.phone}</td>
                <td className='py-4 px-6'>
                  {getSpecialityText(appointment.specialities)}
                </td>
                <td className='py-4 px-6'>{appointment.appointmentDate}</td>
                <td className='py-4 px-6'>{appointment.appointmentTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
