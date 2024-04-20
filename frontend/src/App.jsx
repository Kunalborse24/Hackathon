import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


import NewBlog from "./pages/newblog";
import AddCategories from "./pages/addcategories";
import Home from "./pages/home";
import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";
// import Mybloglist from "./pages/mybloglist";

import Navbar from "./component/navbar";
import Mybloglist from "./component/mybloglist";
import Allbloglist from "./component/allbogs";
import Searchbloglist from "./component/searchblog";


function App() {
  return (
    <div className="container-fluid">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/myblogs" element={<Mybloglist />} />
          <Route path="/allblogs" element={<Allbloglist />} />
          <Route path="/searchblog" element={<Searchbloglist />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/addcategories" element={<AddCategories />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
