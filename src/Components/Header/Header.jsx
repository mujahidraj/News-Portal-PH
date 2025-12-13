import React from 'react';
import logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <div>
      <div className='flex flex-col poppins justify-center items-center gap-3 '>
        <img className='w-1/3' src={logo} alt="" />
        <h2 className='text-[#706F6F] text-lg font-medium '>Journalism Without Fear or Favour</h2>
      </div>
    </div>
  );
};

export default Header;