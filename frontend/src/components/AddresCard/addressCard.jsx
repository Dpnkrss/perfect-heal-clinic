import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaMapLocationDot } from 'react-icons/fa6';

const Card = ({ title, subtitle, address, phone, email }) => {
  return (
    <div className=' rounded-lg overflow-hidden shadow-xl bg-white p-6 h-[500px] w-[500px] flex flex-col items-center z-10 border border-gray-300'>
      <FaMapLocationDot className='text-gray-500 mb-4 text-4xl' />
      <p className='font-bold text-xl mb-2 text-center'>{title}</p>
      <p className='text-center'>{subtitle}</p>
      <p className='mb-5 text-center'>{address}</p>

      <div className='flex flex-col items-center w-full mb-4'>
        <FiPhoneCall className='text-gray-500 text-4xl mb-4' />
        <p className='font-bold text-center mb-1'>Call</p>
        <p className='text-center'>{phone}</p>
      </div>

      <div className='flex flex-col items-center w-full'>
        <FiMail className='text-gray-500 text-4xl mb-4' />
        <p className='font-bold text-center mb-2'>Mail</p>
        <p className='text-center'>{email}</p>
      </div>
    </div>
  );
};

export default Card;
