import PropTypes from 'prop-types';
const Bookmar = ({bookmar}) => {
    return (
      
            <h2 className='font-bold bg-white p-3 mt-4 rounded-lg'>{bookmar.title}</h2>
      
    );
};

Bookmar.propTypes = {
    bookmar: PropTypes.object.isRequired
}

export default Bookmar;