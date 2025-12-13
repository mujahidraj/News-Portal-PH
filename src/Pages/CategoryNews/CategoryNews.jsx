import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesData = fetch('/categories.json').then((res) => res.json());

const CategoryNews = () => {
  const categories = use(categoriesData);
  return (
    <div className=''>
      <h2 className='font-semibold text-lg'>Category</h2>
      <div className='flex md:flex-col flex-row flex-wrap gap-3 my-3'>
        {
          categories.map(items => <NavLink
             className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-red-500 text-white px-7  py-2 duration-200" : " px-7 py-2 hover:bg-slate-200 text-gray-600 duration-200"
              }
             key={items.id}
             to={`/category/${items.id}`}
             >{items.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;