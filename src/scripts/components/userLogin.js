// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'

// ### PRIMARY COMPONENTS
const UserLogin = React.createClass({
	_authenticateUser(e) {
		e.preventDefault()
		let email = e.target.value.email,
			password = e.target.value.password
		Actions.authenticateUser(email, password)
	},
	render() {
		return (
			<form onSubmit={this._authenticateUser}>
				<h3>Login</h3>
				<p>Welcome back.</p>
				<div className="user_email">
					<label>Email</label>
					<input name="email" type="email" />
					<div className="description">Please enter your email</div>
				</div>
				<div className="user_password">
					<label>Email</label>
					<input name="password" type="password" />
					<div className="description">Please enter your password</div>
				</div>
				<div className="user_actions">
					<button type="submit">Login</button>
				</div>
			</form>
		)
	}
})

export default UserLogin