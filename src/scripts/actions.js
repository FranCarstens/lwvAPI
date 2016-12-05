// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from './store'
import User from './models/userModel'
import {CandidateModel, CandidateCollection} from './models/candidateModels'

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
				(resp) => {
					console.log('successfull login', resp)
					location.hash = 'home'
				},
				(err) => { console.log('login failed', err) }
			)
	},
	logoutUser(e) {
		e.preventDefault()
		User.logout()
			.then(
				(resp) => {
					location.hash = 'home'
					console.log('user logged out')
				},
				(err) => { console.log('logout failed', err) }
			)
		location.hash = 'home'
	},
	// ### CANDIDATE ACTIONS
	addCandidate(newCandidate) {
		let candidate = new CandidateModel(newCandidate)
		candidate.save()
			.done(resp => {
				console.log('candidate saved successfull', resp)
				location.hash = 'home'
			})
			.fail(resp => console.log('candidate save failed', resp))
	},
	fetchCandidates() {
		let candiColl = new CandidateCollection()
		candiColl.fetch()
			.then( () => {
				Store._setData({
					candidates: candiColl
				})
			})
	},
	// HELP FUNCTIONS
	sanitizePhone(phone) {
		let no = phone.replace(/[^\d]/g,'')
		return no.substring(no.length-10)
	}
}

export default Actions
