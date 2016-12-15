// ### LIBRARIES & SYSTEM
import Backbone from 'backbone'
import _ from 'underscore'
import React from 'react'
import Store from './store'
import H from './helpers'

// ### COMPONENTS & VARIABLES
import User from './models/userModel'
import { UserCollection } from './models/userModel'
import {
	CandidateModel, CandidateCollection,
	CandidateFavModel, CandidateFavCollection
	} from './models/candidateModels'
import { CandidateSummary } from './components/candidateArticle'




// ### PRIMARY COMPONENTS
const Actions = {

	// ### USER ACTIONS
	fetchUser() {
		let userColl = new UserCollection()
		userColl.fetch()
			.then( () => {
				Store._setData({
					users: userColl
				})
			})
	},
	createUser(user) {
		User.register(user)
			.then(
				(resp) => { 
					console.log('user successfully created', resp)
					this.authenticateUser(user.email, user.password)
				},
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
					location.hash = 'login'
					console.log('user logged out')
				},
				(err) => { console.log('logout failed', err) }
			)
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
		let favColl = new CandidateFavCollection()
		favColl.fetch({
			data: {
				userID: H.getUserId()
				}
			})
			.then( () => {
				Store._setData({
					candidateFavs: favColl
				})
			})
			console.log('end fav stuff')
	},
	fetchCandidate(id) {
		if (H.grabRoute(location.hash,0) === 'candidates') {
				var candidate = new CandidateModel({ _id: id })
			}
			else { var candidate = new CandidateFavModel({ _id: id }) }
		candidate.fetch()
			.then( () => {
				Store._setData({
					candidate: candidate
				})
			})
	},
	deleteCandidate(cid) {
		let coll = Store._getDataProp('candidates')
		let mod = coll.get(cid)
		mod.destroy()
			.done((resp) => console.log('post successfully deleted', resp))
			.fail((resp) => console.log('delete failed', resp))
		Store._emitChange()
		location.hash = 'candidates'
	},	
	// ### IMPORT ACTIONS
	importCandidate(file) {
		let formData = new FormData({
			'file': file
		})
		console.log('we\'re saving some here',file)
		formData.save()
			.done(resp => console.log('hey, hey!'))
			.fail(resp => console.log('looks like we\'re adding the data by hand!'))
	},
	searchCandidates(term) {
		Store._setData({
			searchQ: term
		})
	},
	saveCandidateFav(model) {
		let candidateFav = new CandidateFavModel(model)
		candidateFav.unset('_id').set({
			userID: User.getCurrentUser()._id
		})
		candidateFav.save()
			.done(resp => {
				console.log('Success',resp)
				location.hash='my-pins'
				})
			.fail(resp => console.log('Fail',resp))
	},
	removeCandidateFav(cid) {
		console.log(Store._data)
		let coll = Store._getDataProp('candidateFaves')
		let mod = coll.get(cid)
		mod.destroy()
			.done(resp => console.log('fav unpinned', resp))
			.fail(resp => console.log('unpinning failed', resp))
		Store._emitChange()
		location.hash = 'my-pins'
	},
	// ### CANDIDATE SEARCH
	refineModels(coll,query) {
		return coll.filter((el) => {
			let name = el.get('fullName').toLowerCase(),
				location = el.get('address').postalCode.toLowerCase(),
				region = el.get('address').region.toLowerCase(),	
				race = el.get('electionRace').toLowerCase()
			if (	( 
					name.indexOf(query) !== -1 ||
					location.indexOf(query) !== -1 ||
					region.indexOf(query) !== -1 ||
					race.indexOf(query) !== -1
					) 
					&& query.length !== 0
				) 
				return true
		})
		.map((el,index) => <CandidateSummary model={el} />)
	}
}

export default Actions
