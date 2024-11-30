import React from 'react';
import { NavLink } from 'react-router-dom';

export const BlogDetails = ({ post }) => {
  return (
    <div className="mb-4">
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-xl' >{post.title}</span>
      </NavLink>
      <p className='text-sm'>
        By
        <span className='italic'>{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category?.replaceAll(" ", "-")}`}>
          <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm'>Posted on {post.date}</p>
      <p>{post.content}</p>
      <div className=''>
        {post.tags?.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag?.replaceAll(" ", "-")}`}>
            <span className='text-blue-700 ' ># {tag}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
  