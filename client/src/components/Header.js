import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Payments from "./Payments"

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return
			case false:
				return (
					<li>
						<a href="/auth/google">Sign In With Google</a>
					</li>
				)
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="2" style={{ margin: "0 10px 0 20px" }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3" style={{ margin: "0 10px 0 0" }} >
						<a href="/api/logout">Logout</a>
					</li>
				]
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to="/"
						className="left brand-logo"
						style={{ left: "1.5rem" }}
					>
						FeedMe
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)
