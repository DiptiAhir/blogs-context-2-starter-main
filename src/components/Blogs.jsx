import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import { BlogDetails } from './BlogDetails';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  console.log("Printing inside Blogs component");
  console.log(posts);

  return (
    <div className="flex flex-col pb-[60px] w-11/12 max-w-[780px]  items-center mx-auto min-h-screen">
      { 
        loading ? (
          <Spinner className="center" />
        ) : (
          posts.length === 0 ? (
            <div className="text-center text-lg font-semibold">No Post Found</div>
          ) : (
            posts.map((post) => (
              <BlogDetails key={post.id} post={post} />
            ))
          )
        ) 
      }
    </div>
  );
};

export default Blogs;
