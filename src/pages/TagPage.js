import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

export const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 mt-7">
      <Header />
      <div className="w-11/12 max-w-[780px] my-8 flex gap-x-9 items-start">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-4 px-4 py-2 text-black  font-semibold rounded-md shadow-md hover:bg-blue-700 hover:text-white"
        >
          Back
        </button>
        
        {/* Tag Header */}
        <h2 className="text-2xl font-bold text-gray-800 justify-center">
          Blog Tagged <span className="text-blue-700">#{tag}</span>
        </h2>
      </div>
      
      {/* Blog Posts and Pagination */}
      <Blogs />
      <Pagination />
    </div>
  );
};
