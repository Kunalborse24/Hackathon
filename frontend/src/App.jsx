import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";
import Navbar from "./component/navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Mybloglist from "./pages/mybloglist";
import Mybloglist from "./pages/mybloglist";
import Allbloglist from "./pages/allbogs";
import Searchbloglist from "./pages/searchblog";

function App() {
  return (

    <div className='container-fluid'> 
    <Navbar/>   
 
   <div className="container">

      <Routes>
        <Route path="/" element={<LoginUser/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<RegisterUser/>} />
        <Route path="/myblog" element={<Mybloglist/>} />
        <Route path="/allblog" element={<Allbloglist/>} />
        <Route path="/searchblog" element={<Searchbloglist/>} />


      </Routes>
      <ToastContainer/>
    </div>
   </div> 
  
  );
}

export default App;
