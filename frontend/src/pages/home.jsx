import { Link, useNavigate } from "react-router-dom";
import Blog from "../component/blog";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();
  const onLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div>
      <br />
      <b>Home</b>

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
          <button className="btn-btn" onClick={onLogout}>
            Sign out
          </button>
        </div>

        <div className="col-9">
          <br />
          <br />
          <b>Welcome to Sunbeam Blogs</b>
        </div>
      </div>
    </div>
  );
}

export default Home;
