import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Reading from './components/Reading/Reading'



function App() {

  //use state for reading time
  const [reading, setReading] = useState(0)
  const readHandler = (reading_time, id) => {
    const newReading = reading + reading_time
    setReading(newReading)
    const remaining = bookmarks.filter(bookmar => bookmar.id !== id)
    setBookmarks(remaining)
  }
  //use state for bookmarks
  const [bookmarks, setBookmarks] = useState([])
  const bookMarkHandler = (blog) => {
    if (!bookmarks.includes(blog)) {
      const newBookMarks = [...bookmarks, blog]
      setBookmarks(newBookMarks)
    }
    
  }
  return (
    <section className='p-2 md:container md:mx-auto lg:container lg:mx-auto'>
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row lg:flex-row'>
        <Blogs bookMarkHandler={bookMarkHandler} readHandler={readHandler}></Blogs>
        <div className=' p-4 m-4 rounded-lg space-y-5  bg-gray-200 w-full md:w-3/12 md:mx-auto lg:w-3/12 lg:mx-auto'>
          <Reading reading={reading}></Reading>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </section>
  )
}

export default App
