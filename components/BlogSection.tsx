import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Blog } from "../src/App";

function BlogSection() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/blogs/${params.id}`)
      .then((res) => res.json())
      .then((blogFromDb) => setBlog(blogFromDb));
  }, []);

  if (blog === null) return <p>Loading....</p>;

  return (
   
    <div>
      <img src={blog.user.profilePhoto} alt={blog.user.userName} width={40} />
      <span>{blog.user.userName}</span>
      <h1>{blog.title}</h1>
      <h3>{blog.content}</h3>
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/128/827/827983.png"
          alt="clapping-hand"
          width={30}
        />
        {blog.likes.length}
        
      </button>
     <div>
     <button>
        
        <img
          src="https://cdn-icons-png.flaticon.com/128/1947/1947247.png"
          alt="comment"
          width={30}
        />
       
      </button>
      <p>{blog.responds ? 
        blog.responds.map((respond) => (
          // <div>
          <p>{respond.comment}</p>
          // <p>{respond.user.userName}</p> 
          // </div>
        )) : ""
      }</p>
     </div>
     
     
      
     

      {/* all details of a blog including likes and comments */}
      {/* functions about creating a new comment and increassing the number of likes */}
    </div>
  
  );
}

export default BlogSection;



