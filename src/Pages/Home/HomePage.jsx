import React, { Suspense } from 'react';
import Category from '../Category/Category';
import NewsCard from '../../Components/NewsCard/NewsCard';
import logo from '../../assets/11.png'
import { FaSmile } from 'react-icons/fa';
import { Navigate } from 'react-router';



const HomePage = () => {
  return (
    <>
   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
    
    <Navigate to='/category/1'></Navigate>
   </Suspense>
    <div className='w-9/12  text-center flex flex-col justify-center'>
      <h3 className='text-2xl my-10 font-semibold '>Sorry ! Website is on maintainance. Please choose a Category to see news. Thank you ! </h3>
      <img src={logo} className='rounded-full object-center' alt="" />
    </div>
    </>
  );
};

export default HomePage;