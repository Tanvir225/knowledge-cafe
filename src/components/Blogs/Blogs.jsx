import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 
const Blogs = ({bookMarkHandler,readHandler}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className=" bg-white rounded-lg m-2 md:w-3/5 md:mx-auto lg:3/5 lg:mx-auto ">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} bookMarkHandler = {bookMarkHandler} readHandler={readHandler}></Blog>)
            }

        </div>
    );
};

Blogs.propTypes = {
    bookMarkHandler: PropTypes.func.isRequired,
    readHandler: PropTypes.func.isRequired,
}

export default Blogs;