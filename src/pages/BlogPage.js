import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate,  } from 'react-router';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { BlogDetails } from '../components/BlogDetails';

export const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog,setBlog] = useState(null);
    const [relateBlogs,setRelateBlogs] = useState([]);
    const location = useLocation();
    const Navigate = useNavigate();
    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs( ) {
        setLoading(true);
        let url = `${newBaseUrl}get-blogs?blogID=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelateBlogs(data.relateBlogs);
        } catch (error) {
            console.log("Error aya id wali call");
            setBlog(null);
            setRelateBlogs([]);
            
        } 
        setLoading(false);
        
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }

    },[location.pathname])
  return (
    <div>
        <Header/> 
        <div>
            <button onClick={()=> Navigate(-1)}>
                back
            </button>   
        </div>  
        {
            loading?
           ( <div>
                <p>Loading</p>
            </div>) :
            blog? 
            (<div>
                <BlogDetails post={blog}/>hover:bg-blue-600
                <h2>Related Blogs</h2>
                {
                    relateBlogs.map((post) =>(
                        <div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                    ))
                }
            </div>) :
            (
                <h2>No blog found</h2>

            )
           

        }
        <Blogs/>
        <Pagination/>

    </div>
  )
}
 