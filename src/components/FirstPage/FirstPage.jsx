import PropTypes from 'prop-types';

export const FirstPage = ({ text }) => {
	return <p>{text}</p>
}

FirstPage.propTypes = {
	text: PropTypes.string.isRequired,
}