import React, { Suspense } from 'react';
import { Link } from 'react-router-dom'; // <--- This was missing
import { FaRegBookmark, FaShareAlt, FaStar, FaStarHalfAlt, FaRegStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details, tags, _id } = news;

  // Utility to render stars dynamically
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-orange-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-orange-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-orange-500" />);
      }
    }
    return stars;
  };

  return (
   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
     <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden font-sans">
      
      {/* Header: Author Info & Actions */}
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img 
            className="w-10 h-10 rounded-full object-cover" 
            src={author.img} 
            alt={author.name} 
          />
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">{author.name}</h4>
            <p className="text-gray-500 text-xs">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-gray-800"><FaRegBookmark size={18} /></button>
          <button className="hover:text-gray-800"><FaShareAlt size={18} /></button>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {title}
        </h2>

        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
          <img 
            src={thumbnail_url} 
            alt="Thumbnail" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details & Read More */}
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">
          {details}
        </p>
        
        {/* THIS IS WHERE THE ERROR WAS HAPPENING */}
        <Link 
          to={`/news/${_id}`} 
          className="text-orange-500 font-semibold text-sm hover:underline mb-4 inline-block"
        >
          Read More
        </Link>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
            {tags && tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-200">
                    #{tag}
                </span>
            ))}
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Footer: Rating & Views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-500 text-sm">
              {renderStars(rating.number)}
            </div>
            <span className="text-gray-500 font-medium text-sm">{rating.number}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye size={18} />
            <span className="text-sm font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
   </Suspense>
  );
};

export default NewsCard;