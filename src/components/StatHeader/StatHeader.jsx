import PropTypes from 'prop-types';

export const StatHeader = ({ title }) => {
	return <h2>{title}</h2>
}

StatHeader.propTypes = {
	title: PropTypes.string,
}