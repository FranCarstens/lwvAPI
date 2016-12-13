// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'
import H from '../helpers'
import User from '../models/userModel'
import _ from 'underscore'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS

export const Candidate = React.createClass({
	_getArray(el) {
		return H.getArray(el)
	},
	_getObjectArray(el) {
		return H.getObjectArray(el)
	},
	_phoneFormat(ph) {
		return H.phoneFormat(ph)
	},
	_deleteCandidate(e) {
		e.preventDefault()
		Actions.deleteCandidate(this.props.model.cid)
	},
	_saveCandidateFav(e) {
		e.preventDefault(e)
		let favModel = _.extend(this.props.model.attributes)
		Actions.saveCandidateFav(favModel)
	},
	_removeCandidateFav(e) {
		e.preventDefault()
		Actions.removeCandidateFav(this.props.model.cid)
	},
	render() {
		let model = this.props.model,
			{	
				firstName, middleNames, lastName, avatar,
				education, professionalExperience, communityInvolvement, 
				email, website, phone, facebook, twitter, address: {streetAddress, locality, region, postalCode}, 
				partyAffiliation, electionCycle, electionRace, 
				questions
			} = model.attributes,
			ph = this._phoneFormat(phone),
			candidateID = H.grabRoute(location.hash)			
		return (
			<article key={model.cid} className="candidate-view">
				<header className="clearfix">
					{
						(avatar) 
						? <img src={avatar} /> : '' 
						(firstName) 
						? <h3><a href={`#candidates/${candidateID}`} > {firstName} {middleNames} {lastName} </a></h3> : '' 
					}
				</header>
				<fieldset className="clearfix">
					{ (education[0])
						? <div className="_sg-4">
							<h4>Education</h4>
							<ul>{this._getArray(education)}</ul>
						  </div>
						: '' }
					{ (professionalExperience[0])
						? <div className="_sg-4">
							<h4>Professional Experience</h4>
							<ul>{this._getArray(professionalExperience)}</ul>
						  </div>
						: '' }
					{ (communityInvolvement[0])
						? <div className="_sg-4">
							<h4>Community Involvement</h4>
							<ul>{this._getArray(communityInvolvement)}</ul>
						  </div>
						: '' }
				</fieldset>
				<fieldset className="contact_details">
					<h4>Contact Details</h4>
					{ (ph)
						? <li><i className="icon-phone"></i>{ph}</li> : '' }
					{ (email)
						? <li><i className="icon-mail"></i>{email}</li> : '' }
					{ (website)
						? <li><i className="icon-compass"></i>{website}</li> : '' }
					{ (facebook)
						? <li><i className="icon-facebook"></i>{facebook}</li> : '' }
					{ (twitter)
						? <li><i className="icon-twitter"></i>{twitter}</li> : '' }
					{ (streetAddress) 
						? <div className="vcard">
							<i className="icon-location-pin"></i>
							<span className="fn org">{firstName + ' ' + lastName} </span>
							<span className="adr">
								<span className="street-address">{streetAddress} </span>
								<span className="locality">{locality}, </span> 
								<span className="region">{region} </span>
								<span className="postal-code">{postalCode}</span>
							</span>
						  </div>
						: '' }
				</fieldset>
				<fieldset className="campaign_details">
					<h4>Campaign Details</h4>
					{ (partyAffiliation)
						? <li>{partyAffiliation}</li> : '' }
					{ (electionCycle)
						? <li>{electionCycle}</li> : '' }
					{ (electionRace)
						? <li>{electionRace}</li> : '' }
				</fieldset>
				<fieldset className="questions">
					<h4>Questions</h4>
					{this._getObjectArray(questions)}
				</fieldset>
				<div>
					{ H.userRole() === 1 &&
						<button className="delete button sec-but" onClick={this._deleteCandidate}>Delete</button> }
					{ H.userRole() > 0 && location.hash === '#candidates/' + candidateID && 
						<button className="save button sec-but" onClick={this._saveCandidateFav}>Pin</button> }
					{ H.userRole() > 0 && location.hash === '#my-pins/' + candidateID &&
						<button className="remove button sec-but" onClick={this._removeCandidateFav}>Unpin</button> }
				</div>
			</article>
		)
	}
})


export const CandidateSummary = React.createClass({
	render() {
		let model = this.props.model,
			{
				firstName, middleNames, lastName, avatar, 
				address: {postalCode},
				partyAffiliation, electionCycle, electionRace
			} = model.attributes,
			candidateID = this.props.model.id,
			view = this.props.view ? '#my-pins' : '#candidates'
		return(
			<article key={model.cid} className="candidate-summary">
				<div>
					{ (avatar)
						? <img src={avatar} /> : '' }
				</div>
				<div>
					{ (firstName) 
						? <h3><a href={`${view}/${candidateID}`} > {firstName} {middleNames} {lastName} </a></h3> : '' }
					{ (postalCode) 
						? <span>ZIP: {postalCode}</span> : '' }
					{ (partyAffiliation) 
						? <span>{partyAffiliation} </span> : '' }
					{ (electionCycle) 
						? <span>{electionCycle} </span> : '' }
					{ (electionRace) 
						? <span>{electionRace} </span> : '' }
				</div>
			</article>
		)
	}
})