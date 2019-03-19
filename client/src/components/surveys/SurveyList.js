import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSurveys } from "../../actions"

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys()
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			const { _id, title, body, dateSent, yes, no } = survey

			return (
				<div key={_id} className="card darken-1">
					<div className="card-content">
						<span className="card-title">{title}</span>
						<p>{body}</p>
						<p className="right">
							Sent On: {new Date(dateSent).toLocaleDateString()}
						</p>
						<div className="card-action">
							<a>Yes: {yes}</a>
							<a>No: {no}</a>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return <div>{this.renderSurveys()}</div>
	}
}

function mapStateToProps(state) {
	return { surveys: state.surveys }
}

export default connect(
	mapStateToProps,
	{
		fetchSurveys
	}
)(SurveyList)
