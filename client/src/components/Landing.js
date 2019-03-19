import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Landing extends Component {
	renderButtons() {
		if (this.props.auth) {
			return (
				<div>
					<Link
						to="/surveys"
						style={{ marginTop: "15px" }}
						className="waves-effect waves-light btn-large"
					>
						Surveys
					</Link>
					<div className="fixed-action-btn">
						<Link to="/surveys/new" className="btn-floating btn-large red">
							<i className="material-icons">add</i>
						</Link>
					</div>
				</div>
			)
		}
	}

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h1>FeedMe</h1>
				Collect feedback from your users faster
				{this.renderButtons()}
			</div>
		)
	}
}

function mapStateToProps({ auth }) {
	return { auth }
}

export default connect(mapStateToProps)(Landing)
