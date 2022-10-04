import PropTypes from 'prop-types';

export const StatisticsList = ({ children }) => {
	return (<ul>{children}</ul>
	)
}

StatisticsList.propTypes = {
	children: PropTypes.array.isRequired,
}

