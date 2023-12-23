import React from 'react';
import Card from '../components/AddresCard/addressCard';
const Contact = () => {
  return (
    <div className='p-0'>
      <div className='bg-red-600 text-white text-center py-4'>
        <h1 className='text-2xl font-bold p-8'>Contact Us</h1>
      </div>
      <div className='p-10'>
        <Card
          title='Perfect Heal'
          subtitle='Perfect Heal Ortho & General Clinic'
          address='80L, Mall Road, Model Town, Jalandhar - 144 003'
          phone='80541 02361'
          email='info@perfecthealclinic.com'
        />
      </div>
    </div>
  );
};

export default Contact;
