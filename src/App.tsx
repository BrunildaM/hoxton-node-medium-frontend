import { useEffect, useState } from 'react'

import './App.css'
import LeftMenu from '../components/LeftMenu'
import {Home}  from '../pages/Home'
import {BlogDetails}  from '../pages/BlogDetails'
import {NotFound}  from '../pages/NotFound'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'



export type Blog = {
  id: number       
  title: string
  content:  string
  user: User 
  userId: number
  likes:  []
  responds: Comment[]
}

type User = {
  id: number 
  userName: string
  email: string  
  profilePhoto: string
  blogs:  Blog[]
}

type Comment = {
  id: number
  comment: string
  user: User

}

function App() {
const [blogs, setBlogs] = useState<Blog[]>([])
const [user, setUser] = useState<User | null>(null)

const navigate = useNavigate()

useEffect(() => {
  fetch('http://localhost:4000/blogs')
  .then(res => res.json())
  .then(blogsFromDb => setBlogs(blogsFromDb))
}, [])


// useEffect(() => {
//   fetch(`http://localhost:4000/users/${user?.id}`)
//   .then(res => res.json())
//   .then(userFromDb => setUser(userFromDb))
// }, [user?.id])



  return (
    <div className="App">
     <LeftMenu />
     <main>
       <Routes>
       <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Home blogs={blogs}/>}
          />
           <Route path="/blogs/:id" element={<BlogDetails />} />
           <Route path="*" element={<NotFound />} />
       </Routes>
     </main>
     

     
    </div>
  )
}

export default App
