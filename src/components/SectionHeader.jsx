import PropTypes from 'prop-types';

const SectionHeader = (props) => {
  return (
    <div className="text-center text-balance">
      <h1 className="text-primary-100 text-2xl sm:text-3xl font-semibold mb-2">
        {props.name}
      </h1>
      <p className="text-customBlack-100 text-sm sm:text-base">
        {props.description}
      </p>
    </div>
  );
};

// Define prop types
SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
