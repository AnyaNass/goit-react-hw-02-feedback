export const StatListItem = ({ state }) => {
	return (<>
		{[...Object.keys(state)].map(value => {
			return <li key={value}><span>{value}:</span></li>
		})}
	</>
	)
}

