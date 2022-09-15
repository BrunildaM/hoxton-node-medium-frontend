import { Link } from "react-router-dom"
import { Blog } from "../src/App"

type Props = {
    blogs: Blog[]
}


export function Home ({blogs}: Props) {
    return( 
        <div>
            
            <ul>
        {
          blogs.map(blog => (
            <div key={blog.id}>
                 <Link to={`/blogs/${blog.id}`}>
              <span >
                <img src={blog.user.profilePhoto} alt={blog.user.userName} width={50} /></span>
              <span>{blog.user.userName}</span>
              <h1>{blog.title}</h1>
              <h3>{blog.content}</h3>
              </Link>
            </div>
          ))
        }
      </ul>
      
        </div>
    )
}