import React from 'react';
import logo from '../../assets/footer/Perfect-Heal-Ortho-General-Clinic_Logo-02-e1672842553297.png';

const Footer = () => {
  return (
    <footer className='bg-[#CF2234] text-white text-center p-4 h-[600px] '>
      <div className='max-w-screen-xl mx-auto px-4 md:mt-8'>
        <img src={logo} alt='Perfect Heal Logo' className='mx-auto h-[100px]' />

        {/*ouick link*/}
        <div className='flex flex-col items-center mt-6'>
          <h4 className='text-xl md:text-xl font-bold'>Quick Links</h4>
          <nav className='mt-2 space-x-2'>
            <a href='/' className='text-white hover:text-gray-200'>
              Home
            </a>{' '}
            |
            <a href='/about' className='text-white hover:text-gray-200'>
              About us
            </a>{' '}
            |
            <a href='/services' className='text-white hover:text-gray-200'>
              Services
            </a>{' '}
            |
            <a href='/contact' className='text-white hover:text-gray-200'>
              Contact us
            </a>
          </nav>
        </div>
        {/*cards*/}

        <div className='grid grid-cols-1 md:grid-cols-3 divide-x divide-black md:divide-x-0 md:mt-10 rounded-lg overflow-hidden shadow-md'>
          <div className='bg-white p-4 shadow-md'>
            <svg
              class='h-10 w-10 text-red-500'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              {' '}
              <path stroke='none' d='M0 0h24v24H0z' />{' '}
              <polyline points='3 9 12 15 21 9 12 3 3 9' />{' '}
              <path d='M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10' />{' '}
              <line x1='3' y1='19' x2='9' y2='13' />{' '}
              <line x1='15' y1='13' x2='21' y2='19' />
            </svg>
            <h4 className='font-bold text-red-600'>Mail</h4>
            <p className='mt-2 text-black font-bold'>
              info@perfecthealclinic.com
            </p>
          </div>
          <div className='bg-white p-4  shadow-md'>
            <h4 className='font-bold text-red-600'>Address</h4>
            <address className='not-italic mt-2 font-bold text-black'>
              Perfect Heal
              <br />
              80L, Mall Road,
              <br />
              Model Town,
              <br />
              Jalandhar - 144 003
            </address>
          </div>
          <div className='bg-white p-4 shadow-md'>
            <h4 className='font-bold text-red-600'>Call</h4>
            <p className='mt-2 text-black font-bold'>8054102361</p>
          </div>
        </div>

        <div className='border-t border-white mt-8 pt-4'>
          <p className='text-sm'>
            Copyright © 2023 Perfect Heal Ortho and General Clinic
          </p>
          <p className='text-sm mt-2'>
            Powered By BCC healthcare branding & marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
