import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import Pagination from "./components/Pagination";
import {Route, Routes, useLocation, useSearchParams} from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from "./Pages/BlogPage";
import CategoryPage from './Pages/CategoryPage';
import TagPage from "./Pages/TagPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      // iska matalab tag wala page show karna he
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);     {/* [] iska matalab Jab jab ye change hota ga tab render kar do */}

  return (
    <>
      {/* <Header />
      <div className="my-[100px]">
        <Blogs />
        <Pagination /> 
      </div> */}

      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/blog/:blogId' element = {<BlogPage/>} />      {/* : after this colon, this is dynamic path its vary*/}
          <Route path='/tags/:tag' element = {<TagPage/>} />
          <Route path='/categories/:category' element = {<CategoryPage/>} />
      </Routes>
    </>
  );
}
