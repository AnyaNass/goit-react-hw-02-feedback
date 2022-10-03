import PropTypes from 'prop-types';

export const Buttons = ({ state, onClick }) => {
	return (<ul>
		{[...Object.keys(state)].map(item => {
			return <li key={item}>
				<button type="button" name={item} onClick={onClick}>{item}</button>
			</li>
		})}
	</ul>
	)
}

Buttons.propTypes = {
	state: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
}
