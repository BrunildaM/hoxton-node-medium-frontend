import { useEffect, useState } from 'react'

import './App.css'
import LeftMenu from '../components/LeftMenu'

type Blog = {
  id: number       
  title: string
  content:  string
  user: User 
  userId: number
  likes:  number
  comments: string[]
}

type User = {
  id: number 
  userName: string
  email: string  
  profilePhoto: string
  blogs:  Blog[]
}

function App() {
const [blogs, setBlogs] = useState<Blog[]>([])
const [users, setUsers] = useState<User[]>([])

useEffect(() => {
  fetch('http://localhost:4000/blogs')
  .then(res => res.json())
  .then(blogsFromDb => setBlogs(blogsFromDb))
}, [])


useEffect(() => {
  fetch('http://localhost:4000/users')
  .then(res => res.json())
  .then(usersFromDb => setUsers(usersFromDb))
}, [])

  return (
    <div className="App">
     <LeftMenu />
      <ul>
        {
          blogs.map(blog => (
            <div>
              <span>
                <img src={blog.user.profilePhoto} alt={blog.user.userName} width={50} /></span>
              <span>{blog.user.userName}</span>
              <h1>{blog.title}</h1>
              <h3>{blog.content}</h3>
            </div>
          ))
        }
      </ul>
     
    </div>
  )
}

export default App
