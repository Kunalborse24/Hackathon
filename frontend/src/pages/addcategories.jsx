import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Blog from "../component/blog";

function AddCategories() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  return (
    <div>
      <br />
      <b>New Categories</b>

      <br />
      <div className="row">
        <div className="col-2">
          <Link to="/newblog">New Blog</Link>
          <br />
          <Link to="/allblogs">All Blog</Link>
          <br />
          <Link to="/myblogs">My Blog</Link>
          <br />
          <Link to="/searchblog">Find Blog</Link>
          <br />
          <Link to="/addcategories">Categories</Link>
          <br />
          <br />
          <button className="btn-btn" onClick={onLogout}>Sign out</button>
        </div>
        <div className="col-10">
          <div className="row col-9">
            <label htmlFor="Category">Category :</label>
            <input type="text" name="category" id="Category" />
          </div>
          <div className="row">
            <label htmlFor="Description">Description:</label>
            <textarea name="description" id="Description" cols="30" rows="5"></textarea>
          </div>
          <br />
          <br />
          <div className="row col-2">
            <Link className="btn btn-success">Add Category</Link>
            {/* <button className="btn-btn" onClick={addBlog}>Add Category</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategories;
