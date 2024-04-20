import axios from "axios";

import { useState } from "react";
import Blog from "./blog";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Allbloglist() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  const [blog, setBlog] = useState([]);

  return (
    <div>
      <br />
      <b>All Blogs</b>

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

        <div className="col-9">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Categaroy</th>
                <th>Date</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((blog) => {
                return <Blog id={blog.id} title={blog.title} category={blog.category} Action={blog.Action} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Allbloglist;
