import React from 'react';
import logo from '../../assets/footer/Perfect-Heal-Ortho-General-Clinic_Logo-02-e1672842553297.png';
import mailIcon from '../../assets/footer/mail.svg';
import locationIcon from '../../assets/footer/location_on.svg';
import callIcon from '../../assets/footer/phone.svg';

const Footer = () => {
  return (
    <footer
      className='bg-[#CF2234] text-white  text-center p-4 h-[650px] '
      style={{
        background: 'linear-gradient(to bottom, #F15A2D, #CF2234)',
      }}
    >
      <div className='max-w-screen-2xl mx-auto md:mt-8'>
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

        <div className='grid grid-cols-1 md:grid-cols-3 divide-x divide-black md:divide-x-0 md:mt-10 rounded-lg h-[250px] overflow-hidden shadow-md'>
          <div className='bg-white p-14 shadow-md flex flex-col items-center'>
            <img src={mailIcon} className='w-12 h-12' alt='Mail Icon' />
            <h4 className='font-bold text-red-600'>Mail</h4>
            <p className='mt-2 text-black font-bold'>
              info@perfecthealclinic.com
            </p>
          </div>
          <div className='bg-white p-10  shadow-md flex flex-col items-center'>
            <img src={locationIcon} className='w-12 h-12' alt='Mail Icon' />
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
          <div className='bg-white p-14 shadow-md flex flex-col items-center'>
            <img src={callIcon} className='w-12 h-12' alt='Mail Icon' />
            <h4 className='font-bold text-red-600'>Call</h4>
            <p className='mt-2 text-black font-bold'>8054102361</p>
          </div>
        </div>

        <div className='border-t border-dotted border-white opacity-75 mt-8 pt-4 flex justify-between items-center'>
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
