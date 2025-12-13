import React, { use } from 'react';
import News from './news';

const news = fetch("/news.json").then(res=>res.json())

const TrendingNews = () => {

  const rawData = use (news);



  
  return (
    <div>
      <h3 className='text-lg font-semibold my-5'>Trending News</h3>
      {
       rawData.filter(items => items.rating.badge === "trending").map(items =>(
        <News key={items.id} items={items}></News>
       ))
      }
    </div>
  );
};

export default TrendingNews;