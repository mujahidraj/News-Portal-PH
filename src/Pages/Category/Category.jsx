
import { Suspense, use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { AuthContext } from '../../Provider/AuthProvider';

const Category = () => {

  const [categoryNews, setCategoryNews ] = useState([])
  const { id } = useParams()
  const newsData = useLoaderData();



  useEffect(() => {

    if(parseInt(id)===0){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(newsData)
      return
    }
    else if (parseInt(id)=== 1){
      const exactNews = newsData.filter(news => news.others.is_today_pick === true)
     setCategoryNews(exactNews)
     return
    }
    else{
       const exactNews = newsData.filter(news => news.category_id === parseInt(id))
    setCategoryNews(exactNews)
    }

   
    
  },[newsData , id])

   const {loading} = use(AuthContext)

  if(loading){
    return <span className="loading loading-bars loading-xl"></span>
  }



  return (
    <div>
      <h2 className='font-semibold text-lg'>Top News Arround the World</h2>
      <div className='my-3'>
        {
        categoryNews.map(news=><Suspense key={news.id} fallback={<span className="loading loading-bars loading-xl"></span>}><NewsCard key={news.id} news={news}></NewsCard></Suspense>)
      }
      </div>
    </div>
  );
};

export default Category;