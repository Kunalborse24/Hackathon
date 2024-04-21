import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Blog from "../component/blog";
import { addcategories } from "../services/user";

function AddCategories() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    navigate("/login");
  };

  const addCategory = async () => {
    const result = await addcategories(title, description);
    if (result["status"] === "success") {
      toast.success("Category Added Successfully");
      navigate("/home");
    } else {
      toast.error("Adding Category failed");
    }
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
          <button className="btn-btn" onClick={onLogout}>
            Sign out
          </button>
        </div>
        <div className="col-10">
          <div className="row col-9">
            <label htmlFor="Category">Category :</label>
            <input
              type="text"
              name="category"
              id="Category"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <label htmlFor="Description">Description:</label>
            <textarea
              name="description"
              id="Description"
              cols="30"
              rows="5"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <br />
          <br />
          <div className="row col-2">
            {/* <Link className="btn btn-success">Add Category</Link> */}
            <button className="btn-btn" onClick={addCategory}>
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategories;
