import PropTypes from 'prop-types';
import Bookmar from '../Bookmar/Bookmar';
const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <h2 className="text-[#111] font-bold text-lg p-3">Bookmarks Blogs: {bookmarks.length} </h2>
            <div>
                {
                    bookmarks.map(bookmar=> <Bookmar key={bookmar.id} bookmar={bookmar} ></Bookmar>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}



export default Bookmarks;