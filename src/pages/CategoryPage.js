import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

export const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 mt-7">
      <Header />
      <div className="w-11/12 max-w-[780px] my-8 flex gap-x-9 items-start">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-4 px-4 py-2  text-black font-semibold rounded-md shadow-md hover:bg-blue-700  hover:text-white"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-800 justify-center">
          Blog on <span className="text-blue-700">#{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};
