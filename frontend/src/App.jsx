import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginUser/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<RegisterUser/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
