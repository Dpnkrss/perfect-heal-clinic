import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
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
  // State to track the visibility of dropdowns
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [showFacilitiesDropdown, setShowFacilitiesDropdown] = useState(false);

  const handleTreatmentsHover = () => {
    setShowTreatmentsDropdown(true);
  };

  const handleFacilitiesHover = () => {
    setShowFacilitiesDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowTreatmentsDropdown(false);
    setShowFacilitiesDropdown(false);
  };

  const treatmentSubMenu = {
    'Orthopaedics and Sports Injuries': [
      { name: 'Arthroscopy', path: '/treatment/arthroscopy' },
      { name: 'Sports injuries', path: '/treatment/sports-injuries' },
      { name: 'Bone fractures', path: '/treatment/bone-fractures' },
      { name: 'Rheumatoid arthritis', path: '/treatment/rheumatoid-arthritis' },
      { name: 'Hip and Knee Joint Replacement', path: '/treatment/hip-knee' },
    ],
  };

  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between m-4 px-10zzz'>
          {/*.....logo........*/}
          <div>
            <img src={logo} alt='Perfect heal' />
          </div>
          {/*.....Navigabar........*/}
          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className='relative'
                  onMouseEnter={() => {
                    if (link.path === '/treatment') handleTreatmentsHover();
                    else if (link.path === '/facilities')
                      handleFacilitiesHover();
                  }}
                >
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

                  {/* Treatments Dropdown*/}
                  {link.path === '/treatment' && showTreatmentsDropdown && (
                    <ul
                      className='absolute left-0 w-screen mt-1 border-b border-gray-200 z-20 bg-white'
                      onMouseLeave={handleCloseDropdown}
                    >
                      <li className='dropdown'>
                        <span className='text-left text-orange-500 text-[16px] leading-7 font-[600]'>
                          Orthopaedics and Sports Injuries
                        </span>
                        <div className='dropdown-content m-2 '>
                          {treatmentSubMenu[
                            'Orthopaedics and Sports Injuries'
                          ].map((item) => (
                            <a key={item.path} href={item.path}>
                              {item.name + ' '}
                            </a>
                          ))}
                        </div>
                      </li>
                    </ul>
                  )}
                  {/* Facilities Dropdown */}
                  {link.path === '/facilities' && showFacilitiesDropdown && (
                    <ul
                      className='absolute top-3 left-0 w-10rem mt-2 dropdown-content'
                      onMouseLeave={handleCloseDropdown}
                    >
                      <li>
                        <NavLink to='/facilities/facility1'>Facility 1</NavLink>
                      </li>
                      <li>
                        <NavLink to='/facilities/facility2'>Facility 2</NavLink>
                      </li>
                    </ul>
                  )}
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
