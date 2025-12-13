import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";


const FindUs = () => {
  return (
    <div>
      <h2 className='font-semibold text-lg'>Find Us On</h2>
      <div className='flex flex-col gap-3 my-3'>
        <button className='px-7 flex items-center gap-5 py-2 bg-slate-200 text-black rounded hover:bg-blue-400 duration-200'> <CiFacebook size={24}/> Facebook</button>
        <button className='px-7 flex items-center  gap-5 py-2 bg-slate-200 text-black rounded hover:bg-pink-400 duration-200'> <FaInstagramSquare size={24}/> Instagram</button> 
        <button className='px-7 flex items-center gap-5 py-2 bg-slate-200 text-black rounded hover:bg-blue-400 duration-200'> <FaTwitterSquare size={24}/> Twitter</button>
        <button className='px-7 flex items-center gap-5   py-2 bg-slate-200 text-black rounded hover:bg-red-400 duration-200'> <FaYoutube size={24}/> YouTube</button>
      </div>
    </div>
  );
};

export default FindUs;