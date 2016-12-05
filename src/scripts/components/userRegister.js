// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
const UserRegister = React.createClass({
	_createUser(e) {
		e.preventDefault()
		console.log(e.target)
		let user = {
			username: e.target.username.value,
			email: e.target.email.value,
			password: e.target.password.value
		}
		Actions.createUser(user)
	},
	render() {
		return (
			<form id="register_form" onSubmit={this._createUser}>
				<h3>Create Account</h3>
				<p></p>
				<div className="username">
					<label>Username</label>
					<div className="description">Please choose a username</div>
					<input name="username" type="text" />
				</div>
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
					<button type="submit" className="button sec-but">Create Account</button>
				</div>
			</form>
		)
	}
})

export default UserRegister