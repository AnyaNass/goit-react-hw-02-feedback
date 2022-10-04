import React from 'react';
import { Container } from '../Container/Container'
import { Buttons } from '../Buttons/Buttons'
import { StatHeader } from '../StatHeader/StatHeader'
import { StatisticsList } from '../Statistics/Statistics'

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
			<Container>
				<Buttons state={this.state} onClick={this.handleClick} />
				<StatHeader title="Statistics" />
				<StatisticsList>
					<li><span>Good:</span><span>{this.state.good}</span></li>
					<li><span>Neutral:</span><span>{this.state.neutral}</span></li>
					<li><span>Bad:</span><span>{this.state.bad}</span></li>
					<li><span>Total:</span><span>{this.countTotalFeedback()}</span></li>
					<li><span>Positive feedback:</span><span>{this.countPositiveFeedbackPercentage()}</span></li>
				</StatisticsList>
			</Container>
		)
	}
}