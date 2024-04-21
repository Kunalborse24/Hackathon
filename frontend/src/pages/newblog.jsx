import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Blog from "../component/blog";
import { newblog } from "../services/user";
import { toast } from "react-toastify";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    navigate("/login");
  };

  const navigate = useNavigate();

  const addBlog = async () => {
    const result = await newblog(title, description);
    if (result["status"] === "success") {
      toast.success("Blog Added Successfully");
      navigate("/home");
    } else {
      toast.error("Adding Blog failed");
    }
  };
  return (
    <div>
      <br />
      <b>Add New Blog</b>

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
          <button className="btn-btn" onClick={onLogout}>
            Sign out
          </button>
        </div>
        <div className="col-10">
          <div className="row">
            <label htmlFor="Title">Title:</label>
            <input type="text" name="title" id="Title" />
          </div>
          <div className="row">
            <label htmlFor="Category">Category:</label>
            <select
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            >
              <option value="Nature">Nature</option>
              <option value="Movie">Movie</option>
              <option value="Music">Music</option>
              <option value="Technology">Technology</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <div className="row">
            <label htmlFor="Description">Description:</label>
            <textarea
              name="description"
              id="Description"
              cols="30"
              rows="10"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <br />
          <br />
          <div className="row col-2">
            <button className="btn-btn" onClick={addBlog}>
              Add Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlog;
