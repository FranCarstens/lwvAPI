// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from './store'
import User from './models/userModel'
// ### COMPONENTS & VARIABLES


// ### PRIMARY COMPONENTS
const H = {
	// ### LIST FORMATTERS
	getArray(el) {
		return el.map((el, index) => <li key={index}>{el}</li>)
	},
	getObjectArray(el) {
		return el.map((el, index) => <dl><dt key={index}><span className="dropCap">Q </span>{el.question}</dt><dd><span className="dropCap">A </span>{el.answer}</dd></dl>)
	},
	makeArray(e,identifier) {
		let inputs = document.querySelectorAll('.group_' + identifier + ' input'),
			outArr = []
		inputs.forEach(el => outArr.push(el.value))
		return outArr
	},
	makeComplexArray(e,identifier) {
		let group = document.querySelectorAll('.group_' + identifier + ' fieldset'),
			outArr = []
		group.forEach(el => {
			let question = el.querySelector('input'),
				answer = el.querySelector('textarea')
			outArr.push({question:question.value,answer:answer.value})
		})
		return outArr
	},

	// ### STRING SANITIZERS
	phoneFormat(ph) {
		let num = ph.toString()
		return `(${num.slice(0,3)}) ${num.slice(3,7)}-${num.slice(7)}`
	},
	sanitizePhone(phone) {
		let no = phone.replace(/[^\d]/g,'')
		return no.substring(no.length-10)
	},
	grabRoute(hash,pos) {
		return hash.slice(1).split('/')[pos]
	},
	// ## USER FUNCTIONS
	getUserId() {
		if (User.getCurrentUser()) return User.getCurrentUser()._id
			else return 0
	},
	userRole() {
		if (User.getCurrentUser()) return User.getCurrentUser().roleID
			else return 0
	},
	newCandidate(e, form) {
		return {
			firstName: form.firstname.value,
			middleNames: form.middlename.value,
			lastName: form.lastname.value,
			fullName: form.firstname.value + ' ' + form.middlename.value + ' ' + form.lastname.value,
			avatar: form.avatar.value,
			education: this.makeArray(e,'education'),
			professionalExperience: this.makeArray(e,'professional'),
			communityInvolvement: this.makeArray(e,'community'),
			email: form.email.value,
			website: form.website.value,
			phone: this.sanitizePhone(form.phone.value),
			facebook: form.facebook.value,
			twitter: form.twitter.value,
			address: {
				'streetAddress': form.streetAddress.value,
				'locality': form.locality.value,
				'region': form.region.value,
				'postalCode': form.postalCode.value,
				'countryName': 'US'
			},
			partyAffiliation: form.party.value,
			electionCycle: form.election_cycle.value,
			electionRace: form.election.value,
			questions: this.makeComplexArray(e,'question')
		}
	}
}

export default H