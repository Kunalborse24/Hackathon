import axios from "axios";

import { useState } from "react";
import Blog from "../component/blog";
import { Link } from "react-router-dom";

function Searchbloglist() {
    const [blog, setBlog] = useState([]);

    return (

        <div>
            <br />
            <b>Search Blog</b>

            <br />
            <div className="row">
                <div className="col-2">
                    <br /><br />
                    <Link >New Blog</Link>
                    <br />
                    <Link to='/allblog'>All Blog</Link>
                    <br />
                    <Link to='/myblog'>My Blog</Link>
                    <br />
                    <Link to='/earchblog'>Find Blog</Link>
                    <br />
                    <Link>Categories</Link>
                    <br />

                    <br />
                    <Link >Sign out</Link>
                </div>


                <div className="col-9">
                    <br /><br />
                    <label htmlFor="">Search Blog :</label>
                    <input type="text" className="form formcontrol" />
                    <button className="btn-btn ms-5">search</button>
                    <br /><br />

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
                                return (
                                    <Blog
                                        id={blog.id}
                                        title={blog.title}
                                        category={blog.category}
                                        Action={blog.Action}

                                    />)
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
   
  );
}

export default Searchbloglist;
