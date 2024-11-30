import { createContext, useState } from "react";
import { baseUrl } from "./../baseUrl";
import { useNavigate } from "react-router";

export const AppContext = createContext();

 const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  async function fetchBlogPosts(page = 1,  tag=null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag){
      url+=`&tag=${tag}`
    }
    if(category){
      url+=`&category=${category}`
    }

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching data:", err);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    navigate({search: `page=${page}`})
    setPage(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages ,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return  <AppContext.Provider value={value}>
            {children}
          </AppContext.Provider>;


};

export default AppContextProvider;
