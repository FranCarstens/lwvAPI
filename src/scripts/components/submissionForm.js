// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'
import H from '../helpers'

// ### COMPONENTS & VARIABLES
import {MultiField, QuestionField} from '../components/specialFields'

// ### PRIMARY COMPONENTS
const SubmissionForm = React.createClass({
	_addCandidate(e) {
		e.preventDefault()
		let form = e.target,
			newCandidate = H.newCandidate(e, form)
		Actions.addCandidate(newCandidate)
	},
	render() {
		return (
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
						<input name="email" require type="email" />
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
						<label htmlFor="party">Party</label>
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
		)
	}
})

export default SubmissionForm