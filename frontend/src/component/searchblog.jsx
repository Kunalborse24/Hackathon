import axios from "axios";
import { searchblog } from "../services/user";
import { useEffect, useState } from "react";
import Blog from "./blog";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Searchbloglist() {
    const navigate = useNavigate();
  const onLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    navigate("/login");
  };
  const[search, setSearch] = useState("")


  const onSearch = async()=>
  {
    const result = await searchblog(
      search
    )
    if(result['status'] === "success")
    {
      toast.success("blog Added Successfully");
      navigate("/home")
    }
    else
    {
      toast.error("finding blog failed")
    }
  }


//   useEffect(()=>{

//   })

  return (
    <div>
      <br />
      <b>Search Blog</b>

      <br />
      <div className="row">
        <div className="col-2">
          <br />
          <br />
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
          <br />
          <br />
          <label htmlFor="search">Search Blog :</label>
          <input type="text" className="form formcontrol" id="search" onChange={setSearch}/>
          <button onClick={onSearch} className="btn-btn ms-5">
            search
          </button>
          <br />
          <br />

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
              {/* {blog.map((blog) => {
                return <Blog id={blog.id} title={blog.title} category={blog.category} Action={blog.Action} />;
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Searchbloglist;
