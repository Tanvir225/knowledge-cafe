import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types'; 
const Blog = ({ blog,bookMarkHandler,readHandler }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog || {}
    return (
        <div className="p-4 m-4 border-b-2 space-y-5">
            <div >
                <img src={cover} alt="" className="rounded-lg w-full" />
            </div>
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-4">
                    <div className="w-12">
                        <img src={author_img} alt="" className="w-full" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">{author}</h2>
                        <p className="text-sm text-gray-400">{posted_date}</p>
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <p className="text-sm text-gray-400">{reading_time} min read</p>
                    <button onClick={()=>bookMarkHandler(blog)} className='text-gray-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='font-bold text-2xl'>{title}</h2>


            <p>
                {
                    hashtags.map((hash, id) => <a className='text-gray-400 mr-2' key={id}>#{hash}</a>)
                }
            </p>

            <div>
                <button onClick={()=>readHandler(reading_time,blog.id)} className='text-[#6047EC] underline'>Mark as read</button>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    bookMarkHandler: PropTypes.func.isRequired,
    readHandler: PropTypes.func.isRequired
}

export default Blog;