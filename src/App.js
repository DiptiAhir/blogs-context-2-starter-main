import "./App.css";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";
import { TagPage } from "./pages/TagPage";
import { CategoryPage } from "./pages/CategoryPage";
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  // const [searchParams,setSearchParams] = useState();
  const [searchParams] = useSearchParams(); // Ensure this is properly imported and used 
  const location = useLocation();
// hello
  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const Category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,Category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
          
  },[location.pathname,location.search])
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
    
  );
}
   