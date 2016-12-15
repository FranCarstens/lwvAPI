// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
const UserLogin = React.createClass({
	_authenticateUser(e) {
		e.preventDefault()
		let email = e.target.email.value,
			password = e.target.password.value
		Actions.authenticateUser(email, password)
	},
	render() {
		return (
			<form id="login_form" onSubmit={this._authenticateUser} className="_sg-6">
				<h3>Login</h3>
				<p>Welcome back.</p>
				<div className="user_email">
					<label>Email</label>
					<div className="description">Please enter your email</div>
					<input name="email" type="email" />
				</div>
				<div className="user_password">
					<label>Password</label>
					<div className="description">Please enter your password</div>
					<input name="password" type="password" />
				</div>
				<div className="user_actions form_actions">
					<button type="submit" className="button prm-but">Login</button>
				</div>
			</form>
		)
	}
})

export default UserLogin