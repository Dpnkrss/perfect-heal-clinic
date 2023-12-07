import { useEffect, useRef } from 'react';
import React from 'react';
import logo from '../../assets/logo/Perfect-Heal-Ortho-General-Clinic_Logo-01-e1672666778585-300x99.png';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  {
    path: '/home',
    display: 'About us',
  },
  {
    path: '/treatment',
    display: 'Treatments',
  },
  {
    path: '/facilities',
    display: 'Facilities',
  },
  {
    path: '/contactus',
    display: 'Contact us',
  },
];
const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <img src={logo} alt='Perfect heal' />
          </div>

          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'></ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
