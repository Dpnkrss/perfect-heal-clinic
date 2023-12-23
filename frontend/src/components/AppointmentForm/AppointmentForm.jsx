import { useState } from 'react';

const generateTimeSlots = () => {
  const slots = [];
  const startTime = 9 * 60;
  const endTime = 17 * 60;
  const slotDuration = 30;

  for (let time = startTime; time < endTime; time += slotDuration) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    slots.push(formattedTime);
  }
  return slots;
};
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialities: '',
    appointmentTime: '',
    appointmentDate: new Date(),
  });
  const specialtiesOptions = [
    { value: '54', label: 'Internal Medicine - Migraine' },
    { value: '53', label: 'Internal Medicine - Diabetes' },
    { value: '52', label: 'Internal Medicine - Hepatitis' },
    { value: '51', label: 'Internal Medicine - Dyspepsia' },
    { value: '50', label: 'Internal Medicine - Hypertension' },
    { value: '49', label: 'Internal Medicine - Thyroid Disorders' },
    { value: '48', label: 'Internal Medicine - Tuberculosis' },
    { value: '47', label: 'Internal Medicine - COPD' },
    { value: '46', label: 'Internal Medicine - Asthma' },
    { value: '44', label: 'Internal Medicine - Chronic Cough' },
    { value: '43', label: 'Internal Medicine - Fever' },
    { value: '42', label: 'Internal Medicine - Urinary Tract Infections' },
    { value: '41', label: 'Orthopaedics - Sports Injuries' },
    { value: '40', label: 'Orthopaedics - Rheumatoid Arthritis' },
    { value: '39', label: 'Orthopaedics - Bone Fractures' },
    { value: '38', label: 'Orthopaedics - Hip & Joint Replacement' },
    { value: '37', label: 'Orthopaedics - Arthroscopy' },
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
    console.log(formData);
  };

  console.log('component run');

  const todayDate = new Date().toISOString().split('T')[0];
  const timeSlots = generateTimeSlots();
  return (
    <div
      className=' mx-w-[100%] p-6 bg-[#CF2234]'
      style={{
        background: 'linear-gradient(to bottom, #F15A2D, #CF2234)',
      }}
    >
      <h3 className='flex justify-center align-middle text-xl mb-2 font-medium text-white'>
        Book an Appointment
      </h3>
      <p className='flex justify-center align-middle mb-5 text-3xl text-cyan-50'>
        Your health and Recovery are just a click away
      </p>
      <div className='flex justify-center align-middle'>
        <form onSubmit={handleSubmit}>
          <div className='flex mb-4'>
            <div className='w-1/2 pr-4'>
              <label
                htmlFor='name'
                className='block text-white text-sm font-bold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                required
              />
            </div>

            <div className='w-1/2'>
              <label
                htmlFor='email'
                className='block text-white text-sm font-bold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border rounded-md'
              />
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/2 pr-4'>
              <label
                htmlFor='phone'
                className='block text-white text-sm font-bold mb-2'
              >
                Phone
              </label>
              <input
                type='phone'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border rounded-md'
              />
            </div>

            <div className='w-1/2'>
              <label
                htmlFor='specialities'
                className='block text-white text-sm font-bold mb-2'
              >
                Specialities
              </label>
              <select
                id='specialities'
                name='specialities'
                value={formData.specialities}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border rounded-md h-11'
              >
                {specialtiesOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/2 pr-4'>
              <label
                htmlFor='appointmentTime'
                className='block text-white text-sm font-bold mb-2'
              >
                Appointment Time
              </label>
              <select
                id='appointmentTime'
                name='appointmentTime'
                value={formData.appointmentTime}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border rounded-md h-11'
              >
                <option value='' disabled>
                  Select an Appointment time
                </option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='appointmentDate'
                className='block text-white text-sm font-bold mb-2'
              >
                Appointment Date
              </label>
              <input
                type='date'
                id='appointmentDate'
                name='appointmentDate'
                value={formData.appointmentDate}
                min={todayDate}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border rounded-md'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
