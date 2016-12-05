// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import {MultiField, QuestionField} from '../components/specialFields'

// ### PRIMARY COMPONENTS
const AddCandidate = React.createClass({
	render() {
		return (
			<div className="forms_container">
				<CandidateAddForm />
				<CandidateImportForm />
			</div>
		)
	}
})

const CandidateAddForm = React.createClass({
	_makeArray(e,identifier) {
		let inputs = document.querySelectorAll('.group_' + identifier + ' input'),
			outArr = []
		inputs.forEach(el => outArr.push(el.value))
		return outArr
	},
	_makeComplexArray(e,identifier) {
		console.log(identifier)
		let group = document.querySelectorAll('.group_' + identifier + ' fieldset'),
			outArr = []
		console.log(group)
		group.forEach(el => {
			let question = el.querySelector('input'),
				answer = el.querySelector('textarea')
			outArr.push({question:question.value,answer:answer.value})
		})
		return outArr
	},
	_sanitizePhone(phone) {
		return Actions.sanitizePhone(phone)
	},
	_addCandidate(e) {
		e.preventDefault()
		let form = e.target,
			newCandidate = {
				firstName: form.firstname.value,
				middleNames: form.middlename.value,
				lastName: form.lastname.value,
				avatar: form.avatar.value,
				education: this._makeArray(e,'education'),
				professionalExperience: this._makeArray(e,'professional'),
				communityInvolvement: this._makeArray(e,'community'),
				email: form.email.value,
				website: form.website.value,
				phone: this._sanitizePhone(form.phone.value),
				facebook: form.facebook.value,
				twitter: form.twitter.value,
				address: {
					'street-address': form.streetAddress.value,
					'locality': form.locality.value,
					'region': form.region.value,
					'postal-code': form.postalCode.value,
					'country-name': 'US'
				},
				partyAffiliation: form.party.value,
				electionCycle: form.election_cycle.value,
				electionRace: form.election.value,
				questions: this._makeComplexArray(e,'question')
			}
		Actions.addCandidate(newCandidate)
	},
	render() {
		return (
			<div className="candidate_form_container">
				<form onSubmit={this._addCandidate}>
					<fieldset>
					<legend>Personal Details</legend>
						<div className="firstname _sg-4">
							<label htmlFor="firstname">First Name</label>
							<input name="firstname" type="text" />
						</div>
						<div className="middlename _sg-4">
							<label htmlFor="middlename">Middle Names</label>
							<input name="middlename" type="text" />
						</div>
						<div className="lastname _sg-4">
							<label htmlFor="lastname">Last Name</label>
							<input name="lastname" type="text" />
						</div>
						<div className="avatar upload _sg-12">
							<label htmlFor="avatar">Photo Url</label>
							<input name="avatar" type="url" />
						</div>
						<div className="education _sg-12">
							<MultiField type="education" label="Education" />
						</div>
						<div className="professional _sg-12">
							<MultiField type="professional" label="Professional Experience" />
						</div>
						<div className="community _sg-12">
							<MultiField type="community" label="Community Involvement" />
						</div>
					</fieldset>
					<fieldset>
					<legend>Contact Details</legend>
						<div className="email _sg-6">
							<label htmlFor="email">Email</label>
							<input name="email" type="email" />
						</div>
						<div className="website _sg-6">
							<label htmlFor="website">Website</label>
							<input name="website" type="url" />
						</div>
						<div className="phone _sg-6">
							<label htmlFor="phone">Phone</label>
							<input name="phone" type="tel" />
						</div>
						<div className="facebook _sg-6 _cl">
							<label htmlFor="facebook">Facebook</label>
							<input name="facebook" type="url" />
						</div>
						<div className="twitter _sg-6">
							<label htmlFor="twitter">Twitter</label>
							<input name="twitter" type="url" />
						</div>
						<div className="_cl">
							<fieldset>
								<legend>Campaign Address</legend>
								<div className="streetAddress _sg-12">
									<label htmlFor="streetAddress">Street Address</label>
									<input name="streetAddress" type="text" />
								</div>
								<div className="locality _sg-6">
									<label htmlFor="locality">City</label>
									<input name="locality" type="text" />
								</div>
								<div className="region _sg-4">
									<label htmlFor="region">State</label>
									<input name="region" type="text" />
								</div>
								<div className="postalCode _sg-2">
									<label htmlFor="postalCode">Zip</label>
									<input name="postalCode" type="text" />
								</div>
							</fieldset>
						</div>
					</fieldset>
					<fieldset>
					<legend>Campaign Details</legend>
						<div className="party _sg-2">
							<label htmlFor="party">Party Affiliation</label>
							<select name="party">
								<option>D</option>
								<option>R</option>
							</select>
						</div>
						<div className="election_cycle _sg-5">
							<label htmlFor="election_cycle">Election Cycle</label>
							<input name="election_cycle" type="text" />
						</div>
						<div className="election _sg-5">
							<label htmlFor="election">Election Race</label>
							<input name="election" type="text" />
						</div>
						<div className="questions _sg-12">
							<QuestionField type="question" label="Questions" />
						</div>
						<div className="form_actions _cl">
							<button type="submit" className="submit button sec-but">Add Candidate</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
})

const CandidateImportForm = React.createClass({
	render() {
		return (
			<div className="candidate_form_container">
				<form onSubmit={this._importCandidates}>
				</form>
			</div>
		)
	}
})

export default AddCandidate