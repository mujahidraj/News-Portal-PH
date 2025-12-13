import React from 'react';
import Header from '../../Components/Header/Header';
import BreakingNews from '../../Components/BreakingNews/BreakingNews';

const Home = () => {
  return (
    <div>
      {/* project header */}
      <header className='flex flex-col gap-5 '>
          <Header></Header>
          <section className='w-11/12 mx-auto'>
            <BreakingNews></BreakingNews>
          </section>
      </header>

      {/* Left aside bar */}
      <section className='left-section'>

      </section>

      {/* Main section */}
      <section className='main-section'>

      </section>

      {/* right aside bar */}
      <section className='right-section'>

      </section>
    </div>
  );
};

export default Home;