// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import User from '../models/userModel'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
const Actions = {

	// ### USER ACTIONS
	createUser(user) {
		User.register(user)
			.then(
				(resp) => { console.log('user successfully created', resp) },
				(err) => { console.log('could not create user', err) }

				)

	},
	authenticateUser(email, password) {
		User.login(email, password)
			.then(
				(resp) => { console.log('successfull login', resp },
				(err) => { console.log('login failed', err) }
			)
	},
	logoutUser() {
		User.logout()
			.then(
				(resp) => { location.hash = 'home' }
				(err) => { console.log('logout failed', err) }
			)
	},

}

export default Actions