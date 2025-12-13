import React from 'react';
import Header from '../../Components/Header/Header';
import BreakingNews from '../../Components/BreakingNews/BreakingNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../Components/LeftAside/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../../Components/RightAside/RightAside';

const Home = () => {
  
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

     

    <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
        <aside className='col-span-3'>
        <LeftAside></LeftAside>
      </aside>

      
      <section className='main-section col-span-6'>
      <Outlet></Outlet>
      </section>

      

      <aside className='col-span-3'>
        <RightAside></RightAside>
      </aside>
    </main>
    </div>
  );
};

export default Home;