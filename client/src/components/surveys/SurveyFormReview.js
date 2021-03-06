import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import { withRouter } from 'react-router-dom'

import formFields from "./formFields"
import * as actions from "../../actions"

const SurveyFormReview = props => {
	const { onCancel, formValues, submitSurvey, history } = props

	const reviewFields = _.map(formFields, field => {
		const { label, name } = field
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		)
	})

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button className="yellow darken-3 btn-flat" onClick={onCancel}>
				Back
			</button>
			<button
				onClick={() => {
					submitSurvey(formValues, history)
				}}
				className="green btn-flat right white-text"
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		formValues: state.form.surveyForm.values
	}
}

export default connect(
	mapStateToProps,
	actions
)(withRouter(SurveyFormReview))
