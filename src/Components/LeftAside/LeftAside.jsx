import React, { Suspense } from 'react';
import CategoryNews from '../../Pages/CategoryNews/CategoryNews';

const LeftAside = () => {
  
  return (
    <div>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <CategoryNews></CategoryNews>
      </Suspense>
    </div>
  );
};

export default LeftAside;