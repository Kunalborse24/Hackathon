import axios from "axios";

import { useState } from "react";
import Blog from "../component/blog";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Allbloglist() {
  const [blog, setBlog] = useState([]); 

  
  return (
    
    <div> 
        <br />
        <b>All Blogs</b>

        <br />
        <div className="row">
                <div className="col-2">
                    <Link >New Blog</Link>
                    <br />
                    <Link to='/allblog'>All Blog</Link>
                    <br />
                    <Link to='/myblog'>My Blog</Link>
                    <br />
                    <Link to='/searchblog'>Find Blog</Link>
                    <br />
                    <Link>Categories</Link>
                    <br />

                    <br />
                    <Link >Sign out</Link>
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
                  return(
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

export default Allbloglist;
