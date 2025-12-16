import React from 'react';
import { ArrowLeft, Eye, Star } from 'lucide-react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  
  // 1. Loading State: If news is null or undefined, show a loader or return null
  // if (!news) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen text-gray-500">
  //       Loading...
  //     </div>
  //   );
  // }

  // Helper to format the date nicely (Safe version)
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gray-50 p-6">
      
      {/* Card Container */}
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={news?.image_url || "https://via.placeholder.com/600x400"} 
            alt={news?.title || "News Image"} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          
          {/* FIXED: Use optional chaining (?.) to safely check if rating exists */}
          {news?.rating?.badge === 'trending' && (
            <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Star size={12} fill="currentColor" /> Trending
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {news?.title || "Untitled News"}
          </h2>

          {/* Author & Date Row */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm border-b border-gray-100 pb-4">
            
            {/* Safe Author Check */}
            {news?.author && (
              <div className="flex items-center gap-2">
                <img 
                  src={news.author.img || "https://via.placeholder.com/40"} 
                  alt={news.author.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{news.author.name}</p>
                  <p className="text-gray-500 text-xs">Author</p>
                </div>
              </div>
            )}
            
            <div className="hidden sm:block w-px h-8 bg-gray-300 mx-2"></div>
            
            <div className="text-gray-600">
              {formatDate(news?.author?.published_date)}
            </div>

          

            {/* View Count (Safe Check) */}
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <Eye size={14} />
              <span>{news?.total_view?.toLocaleString() || 0} Views</span>
            </div>
          </div>

          {/* Tags (Safe Map) - Checks if tags exists and is an array */}
          <div className="flex flex-wrap gap-2 mb-4">
            {Array.isArray(news?.tags) && news.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer capitalize"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Details Text */}
          <p className="text-gray-600 leading-relaxed mb-8 text-base text-justify">
            {news?.details || "No details available."}
          </p>

          {/* Footer Action Button */}
          <div>
            <Link to={`/category/${news.category_id}`} className="bg-[#D32F4F] hover:bg-[#b0223f] text-white px-6 py-3 rounded-md font-medium text-sm transition-colors flex items-center gap-2 shadow-md">
              <ArrowLeft size={18} />
              All news in this category
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;