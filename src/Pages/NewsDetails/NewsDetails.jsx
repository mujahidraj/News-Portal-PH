import React, { Suspense, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/RightAside/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';
import Navbar from '../../Components/Navbar/Navbar';

const NewsDetails = () => {

  const [news , setNews] = useState({})

  const newsData = useLoaderData()
  const {id} = useParams();

  
  useEffect (()=>{
    const newsDetails = newsData.find(singleNews=> singleNews.id == id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNews(newsDetails)
  },[newsData,id])

  
  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main className='w-11/12 mx-auto grid my-10 grid-cols-4'>
        <section className='col-span-3'>
          <h2 className='text-lg font-semibold'>News Detail</h2>
         <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
           <NewsDetailsCard news={news}></NewsDetailsCard>
         </Suspense>
        </section>
        <section className='col-span-1'>
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;