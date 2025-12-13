import React, { use } from 'react';
import SingleNews from './SingleNews';



const news = fetch("/news.json").then(res=>res.json())

const TrendingNews = () => {

  const rawData = use (news);



  
  return (
    <div>
      <h3 className='text-lg font-semibold my-5'>Trending News</h3>
      {
       rawData.filter(items => items.rating.badge === "trending").map(items =>(
        <SingleNews key={items.id} items={items}></SingleNews>
       ))
      }
    </div>
  );
};

export default TrendingNews;