import { useEffect, useRef } from 'react';
import React from 'react';
import logo from '../../assets/logo/Perfect-Heal-Ortho-General-Clinic_Logo-01-e1672666778585-300x99.png';
import phoneimg from '../../assets/phone_calling.gif';
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
    <header className='header flex items-center px-20'>
      <div className='container'>
        <div className='flex items-center justify-between m-4 '>
          {/*.....logo........*/}
          <div>
            <img src={logo} alt='Perfect heal' />
          </div>
          {/*.....Navigabar........*/}
          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*....nav right......*/}
          <div className='inline-flex'>
            <Link to='/'>
              <figure className='w-[50px] h-[50px] rounded-full'>
                <img
                  src={phoneimg}
                  className='rounded-full animate-bounce h-[50px] w-[50px] '
                  alt='Phone number'
                />
              </figure>
            </Link>
            <Link to='/'>
              <span className='text-[#CF2234] text-xl font-bold mt-2'>
                80541 02361
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
