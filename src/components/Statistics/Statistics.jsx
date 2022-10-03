export const Statistics = ({ state }) => {
	return (<>
		<h2>Statistics:</h2>
		<ul>
			{[...Object.values(state)].map(value => {
				return <li key={getKey()}>{value}</li>
			})}
		</ul>
	</>
	)
}

function getKey() {
	return Math.random();
}