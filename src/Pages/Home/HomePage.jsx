import React from 'react';
import Category from '../Category/Category';
import NewsCard from '../../Components/NewsCard/NewsCard';
import logo from '../../assets/11.png'
import { FaSmile } from 'react-icons/fa';



const HomePage = () => {
  return (
    <div className='w-9/12  text-center flex flex-col justify-center'>
      <h3 className='text-2xl my-10 font-semibold '>Sorry ! Website is on maintainance. Please choose a Category to see news. Thank you ! </h3>
      <img src={logo} className='rounded-full object-center' alt="" />
    </div>
  );
};

export default HomePage;