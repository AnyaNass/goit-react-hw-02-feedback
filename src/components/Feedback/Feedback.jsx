import React from 'react';
import { Buttons } from '../Buttons/Buttons'
import { Statistics } from '../Statistics/Statistics'

export const Feedback = class Feedback extends React.Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	handleClick = (e) => {
		this.setState((prevState) => ({ [e.target.name]: prevState[e.target.name] + 1 }))
	}

	countTotalFeedback = () => {
		return Object.values(this.state).reduce((a, b) => (a + b), 0)
	}

	countPositiveFeedbackPercentage = () => {
		return Math.round(this.state.good * 100 / this.countTotalFeedback())
	}

	render() {
		return (
			<>
				<Buttons state={this.state} onClick={this.handleClick} />
				<Statistics state={this.state} />
				<div>
					{/* <p>{this.state.good}</p>

					<p>{this.state.neutral}</p>

					<p>{this.state.bad}</p> */}


					<p>{this.countTotalFeedback()}</p>

					<p>Good percent {this.countPositiveFeedbackPercentage()}</p>
				</div>
			</>
		)

	}
}