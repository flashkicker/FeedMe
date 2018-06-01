import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import "materialize-css/dist/css/materialize.min.css"

import App from "./components/App"
import reducers from "./reducers"

import axios from 'axios'
window.axios = axios

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
)

// responsible for the redux or data related setup

const survey = {
	title: 'title',
	subject: 'subject',
	recipients: 'ujjvalkumaria@gmail.com',
	body: 'body'
}