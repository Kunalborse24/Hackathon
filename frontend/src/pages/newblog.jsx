import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Blog from "../component/blog";

function NewBlog() {

    const onLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("/login");}

  const navigate = useNavigate();

  const [blog, setBlog] = useState([]);

  return (
    

    <div>
        <br />
        <b>Add New Blog</b>

        <br />
        <div className="row">
                 <div className="col-2">
                    <Link to="/newblog">New Blog</Link>
                    <br />
                    <Link to='/allblogs'>All Blog</Link>
                    <br />
                    <Link to='/myblogs'>My Blog</Link>
                    <br />
                    <Link to='/searchblog'>Find Blog</Link>
                    <br />
                    <Link to="/addcategories">Categories</Link>
                    <br />
                    <br />
                    <button className="btn-btn" onClick={onLogout}>Sign out</button>
                 </div>
                 <div className="col-10">
                  <div className="row">
                    <label htmlFor="Title">Title:</label>
                    <input type="text" name="title" id="Title"/>
                  </div>
                  <div className="row">
                    <label htmlFor="Category">Category:</label>
                    <select>
                      <option value="Nature">Nature</option>
                      <option value="Movie">Movie</option>
                      <option value="Music">Music</option>
                      <option value="Technology">Technology</option>
                      <option value="Java">Java</option>
                    </select>
                  </div>
                  <div className="row">
                    <label htmlFor="Description">Description:</label>
                    <textarea name="description" id="Description" cols="30" rows="10"></textarea>
                  </div>  
                  <br />
                  <br />
                  <div className="row col-2">
                    <Link className="btn btn-success">Add Blog</Link> 
                    {/* <button className="btn-btn" onClick={addBlog}>Add Blog</button> */}
                 </div>                 
                 </div>
                 
                 
        </div>
      
    </div>
  );
}

export default NewBlog;
