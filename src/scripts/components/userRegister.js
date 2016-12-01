// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'

// ### PRIMARY COMPONENTS
const UserRegister = React.createClass({
	_createUser(e) {
		e.preventDefault()
		let user = {
			username: e.target.value.username,
			email: e.target.value.email,
			password: e.target.value.password
		}
		Actions.createUser(user)
	}
	render() {
		return (
			<form onSubmit={this._createUser}>
				<h3>Create Account</h3>
				<p></p>
				<div className="username">
					<label>Username</label>
					<input name="username" type="username" />
					<div className="description">Please choose a username</div>
				</div>
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
					<button type="submit">Create Account</button>
				</div>
			</form>
		)
	}
})

export default UserRegister