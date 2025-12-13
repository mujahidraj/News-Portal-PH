import React, { Suspense } from 'react';
import CategoryNews from '../../Pages/CategoryNews/CategoryNews';
import TrendingNews from '../TrendingNews/TrendingNews';

const LeftAside = () => {
  
  
  return (
    <div>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <CategoryNews></CategoryNews>
        <TrendingNews></TrendingNews>
      </Suspense>
    </div>
  );
};

export default LeftAside;