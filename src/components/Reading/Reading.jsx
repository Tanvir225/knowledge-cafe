import PropTypes from 'prop-types';
const Reading = ({reading}) => {
    return (
        <h2 className="text-[#6047EC] font-bold border-2 border-[#6047EC] p-3 rounded-lg">Spent Time On Read : {reading} mins </h2>
    );
};

Reading.propTypes = {
        reading: PropTypes.number.isRequired
}

export default Reading;