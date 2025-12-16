import React from 'react';
import Header from '../../Components/Header/Header';
import BreakingNews from '../../Components/BreakingNews/BreakingNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../Components/LeftAside/LeftAside';
import { Outlet, useNavigate } from 'react-router';
import RightAside from '../../Components/RightAside/RightAside';

const Home = () => {
  const {state} = useNavigate()
  return (
    <div>
    

      <header className='flex flex-col gap-5 '>
          <Header></Header>
          <section className='w-11/12 mx-auto'>
            <BreakingNews></BreakingNews>
          </section>
          <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
          </nav>
      </header>

     

    <main className='w-11/12 mx-auto my-3 md:grid grid grid-cols-1 md:grid-cols-12'>
        <aside className='order-2 md:order-1 md:col-span-3'>
        <LeftAside></LeftAside>
      </aside>

      
      <section className='order-1 md:order-2 main-section md:col-span-6'>
     {
      state == 'loading' ? <span className="loading loading-ring loading-xl"></span> : <Outlet></Outlet>
 
     }
      </section>

      

      <aside className='order-3 md:col-span-3'>
        <RightAside></RightAside>
      </aside>
    </main>
    </div>
  );
};

export default Home;