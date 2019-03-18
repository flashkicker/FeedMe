import React from "react"

export default props => {
	// meta is passed down by redux-form
	const {
		input,
		label,
		meta: { error, touched }
	} = props

	//{touched && error} is doing a boolean evaluation
	//if touched === true and error exists
	//show error
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: "5px" }} />
			<div className="red-text" style={{ marginBottom: "20px" }}>
				{touched && error}
			</div>
		</div>
	)
}
