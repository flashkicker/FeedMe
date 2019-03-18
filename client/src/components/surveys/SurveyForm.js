import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import { Link } from "react-router-dom"
import _ from "lodash"

import SurveyField from "./SurveyField"
import validateEmails from "../../utils/validateEmails"

const FIELDS = [
	{ label: "Survey Title", name: "title" },
	{ label: "Subject Line", name: "subject" },
	{ label: "Email Body", name: "body" },
	{ label: "Recipient List", name: "emails" }
]

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, field => {
			const { label, name } = field
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			)
		})
	}

	render() {
		return (
			<div>
				<br />
				<form
					onSubmit={this.props.handleSubmit(values => {
						console.log(values)
					})}
				>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
						<i className="material-icons right">close</i>
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		)
	}
}

const validate = values => {
    const errors = {}
    
    errors.emails = validateEmails(values.emails || '')

	_.each(FIELDS, field => {
		const { name, label } = field
		if (!values[name]) {
			errors[name] = `You must provide a ${label.toLowerCase()}`
		}
    })

	return errors
}

export default reduxForm({
	validate,
	form: "surveyForm"
})(SurveyForm)
