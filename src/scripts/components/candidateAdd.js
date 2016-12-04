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
	render() {
		return (
			<div className="candidate_form_container">
				<form onSubmit={this._addCandidate}>
					<fieldset>
					<legend>Personal Details</legend>
						<div className="firstname">
							<label htmlFor="firstname">First Name</label>
							<input name="firstname" type="text" />
						</div>
						<div className="middlename">
							<label htmlFor="middlename">Middle Names</label>
							<input name="middlename" type="text" />
						</div>
						<div className="lastname">
							<label htmlFor="lastname">Last Name</label>
							<input name="lastname" type="text" />
						</div>
						<div className="education">
							<MultiField type="education" label="Education" />
						</div>
						<div className="professional">
							<MultiField type="professional" label="Professional Experience" />
						</div>
						<div className="community">
							<MultiField type="community" label="Community Involvement" />
						</div>
					</fieldset>
					<fieldset>
					<legend>Contact Details</legend>
						<div className="email">
							<label htmlFor="email">Email</label>
							<input name="email" type="email" />
						</div>
						<div className="website">
							<label htmlFor="website">Website</label>
							<input name="website" type="url" />
						</div>
						<div className="phone">
							<label htmlFor="phone">Phone</label>
							<input name="phone" type="tel" />
						</div>
						<div className="facebook">
							<label htmlFor="facebook">Facebook</label>
							<input name="facebook" type="url" />
						</div>
						<div className="twitter">
							<label htmlFor="twitter">Twitter</label>
							<input name="twitter" type="url" />
						</div>
						<div>
							<fieldset>
								<legend>Campaign Address</legend>
								<div className="address_1">
									<label htmlFor="address_1">Address 1</label>
									<input name="address_1" type="text" />
								</div>
								<div className="address_2">
									<label htmlFor="address_2">Address 2</label>
									<input name="address_2" type="text" />
								</div>
								<div className="city">
									<label htmlFor="city">City</label>
									<input name="city" type="text" />
								</div>
								<div className="state">
									<label htmlFor="state">State</label>
									<input name="state" type="text" />
								</div>
								<div className="zip">
									<label htmlFor="zip">Zip</label>
									<input name="zip" type="text" />
								</div>
							</fieldset>
						</div>
					</fieldset>
					<fieldset>
					<legend>Campaign Details</legend>
						<div className="party">
							<label htmlFor="party">Party Affiliation</label>
							<select name="party">
								<option>D</option>
								<option>R</option>
							</select>
						</div>
						<div className="election_cycle">
							<label htmlFor="election_cycle">Election Cycle</label>
							<input name="election_cycle" type="text" />
						</div>
						<div className="election">
							<label htmlFor="election">Election Race</label>
							<input name="election" type="text" />
						</div>
						<div className="questions">
							<QuestionField type="question" label="Questions" />
						</div>
						<div className="form_actions">
							<button type="submit" className="submit button sec-but">Add</button>
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