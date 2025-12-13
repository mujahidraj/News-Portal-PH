import React from 'react';
import { CiCalendar } from "react-icons/ci"; // Clean line-style calendar icon

const News = ({ items }) => {

  

  const { title, thumbnail_url, author, category_id } =items;



  // Helper to format date like "Jan 4, 2022"
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Mock category lookup since the API gives an ID (2)
  const getCategoryName = (id) => {
    const categories = { 1: "Sports", 2: "Business", 3: "Politics" };
    return categories[id] || "News";
  };

  return (
    <div className="bg-white p-2 rounded-lg max-w-sm font-sans">
      {/* Thumbnail Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
        <img 
          src={thumbnail_url} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-4 leading-snug">
        {title}
      </h3>

      {/* Footer: Category & Date */}
      <div className="flex items-center gap-5">
        <span className="font-semibold text-gray-900 text-sm">
          {getCategoryName(category_id)}
        </span>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <CiCalendar size={18} />
          <span>{formatDate(author.published_date)}</span>
        </div>
      </div>
    </div>
  );
};
export default News;