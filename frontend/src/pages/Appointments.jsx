import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar';
import ReactPaginate from 'react-paginate';

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const appointmentsPerPage = 8;

  const getAppointments = async () => {
    try {
      const res = await axios.get('/api/v1/doctor/user-appointments', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (res.data.success) {
        const sortedAppointments = res.data.data.sort((a, b) => {
          // Combine the date and time into a single string and then into a Date object
          const dateTimeA = new Date(
            `${a.appointmentDate} ${a.appointmentTime}`
          );
          const dateTimeB = new Date(
            `${b.appointmentDate} ${b.appointmentTime}`
          );

          // Sort in descending order
          return dateTimeB - dateTimeA;
        });

        setAppointments(sortedAppointments);
      }
      console.log(appointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  //calculates the total number of pages needed for pagination based on the number of appointments and how many appointments are to displayed per page.ceil returns whole number
  const pageCount = Math.ceil(appointments.length / appointmentsPerPage);

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

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // it will give first 8 appointments to show in current index page
  const displayedAppointments = appointments.slice(
    currentPage * appointmentsPerPage,
    (currentPage + 1) * appointmentsPerPage
  );

  return (
    <div className='flex'>
      <Sidebar />
      <div className='text-center mt-8 mb-8 px-[200px]'>
        <h1 className='text-3xl font-semibold text-center mb-8'>
          Appointments
        </h1>
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
              {displayedAppointments.map((appointment) => (
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
                  <td className='py-4 px-6 whitespace-nowrap'>
                    {appointment.appointmentDate}
                  </td>
                  <td className='py-4 px-6 whitespace-nowrap'>
                    {appointment.appointmentTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'flex items-center justify-center my-4'}
            pageLinkClassName={
              'mx-2 px-3 py-1 border rounded hover:bg-red-500 hover:text-white'
            }
            previousLinkClassName={
              'mx-2 px-3 py-1 border rounded hover:bg-red-500 hover:text-white'
            }
            nextLinkClassName={
              'mx-2 px-3 py-1 border rounded hover:bg-red-500 hover:text-white'
            }
            breakLinkClassName={'mx-2 px-3 py-1 border rounded'}
            activeLinkClassName={'bg-red-500 text-white rounded-full'}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
