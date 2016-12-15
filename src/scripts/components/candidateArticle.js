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
			candidateID = H.grabRoute(location.hash,1)
		console.log('thestore', Store._data)
		return (
			<article key={model.cid} className="candidate-view">
				<header className="clearfix">
					<div className="campaign_details">
						{ (partyAffiliation) && <span className={`can_party can_${partyAffiliation}`}>{partyAffiliation}</span> }
						{ (electionCycle) && <span className="e_cycle"><strong>{electionCycle}</strong></span> }
						{ (electionRace) && <span className="e_race">{electionRace}</span> }
					</div>
				</header>
				<section className="clearfix identity_card">
					<div className="identity contact_details _sg-4">
						{ (avatar) && <img src={avatar} /> }
						{ (firstName) && <h3><a href={`#candidates/${candidateID}`} > {firstName} {middleNames} {lastName} </a></h3> }
					</div>
					<div className="contact_details _sg-8">
						<div className="contact_analog _nl_sg-6">
							<ul>
								{ (ph) && <li><i className="icon-phone"></i>{ph}</li> }
								{ (email) && <li><i className="icon-mail"></i>{email}</li> }
							</ul>
							<br />
							{ (streetAddress) && 
								<div className="vcard">
									<i className="icon-location-pin"></i>
									<div className="address">
										<span className="fn org">{firstName + ' ' + lastName} </span><br />
										<span className="adr">
											<span className="street-address">{streetAddress} </span><br />
											<span className="locality">{locality}, </span> 
											<span className="region">{region} </span>
											<span className="postal-code">{postalCode}</span>
										</span>
									</div>
								</div>
							}
						</div>
						<div className="contact_digital _nl_sg-6">
							<ul>
								{ (website) && <li><i className="icon-compass"></i>{website}</li> }
								{ (facebook) && <li><i className="icon-facebook"></i>{facebook}</li> }
								{ (twitter) && <li><i className="icon-twitter"></i>{twitter}</li> }
							</ul>
						</div>
					</div>
				</section>




				<section className="bio_info">
					{ (education[0]) &&
						<div className="clearfix">
							<h4 className="_nr_sg-4 _sg-12">Education<i className="icon-triangle-right"></i></h4>
							<ul className="_nr_sg-8 _sg-12">{this._getArray(education)}</ul>
						</div>
					}
					{ (professionalExperience[0]) &&
						<div className="clearfix">
							<h4 className="_nr_sg-4 _sg-12">Professional Experience<i className="icon-triangle-right"></i></h4>
							<ul className="_nr_sg-8 _sg-12">{this._getArray(professionalExperience)}</ul>
						</div>
					}
					{ (communityInvolvement[0]) &&
						<div className="clearfix">
							<h4 className="_nr_sg-4 _sg-12">Community Involvement<i className="icon-triangle-right"></i></h4>
							<ul className="_nr_sg-8 _sg-12">{this._getArray(communityInvolvement)}</ul>
						</div>
					}
				</section>
				
				
				<section className="questions_container clearfix">
					<div>
						<h4 className="_nr_sg-4 _sg-12">Questions<i className="icon-triangle-right"></i></h4>
						<div className="questions _nr_sg-8 _sg-12">{this._getObjectArray(questions)}</div>
					</div>
				</section>
				<div className="user_actions">
					{ H.userRole() === 1 &&
						<span className="delete" onClick={this._deleteCandidate}>Delete<i className="icon-cross"></i></span> }
					{ H.userRole() > 0 && location.hash === '#candidates/' + candidateID && 
						<span className="save" onClick={this._saveCandidateFav}>Read Later<i className="icon-tag"></i></span> }
					{ H.userRole() > 0 && location.hash === '#my-pins/' + candidateID &&
						<span className="remove" onClick={this._removeCandidateFav}>Remove<i className="icon-untag"></i></span> }
				</div>
			</article>
		)
	}
})


export const CandidateSummary = React.createClass({
	_onclick() {
		let candidateID = this.props.model.id,
			view = this.props.view ? '#my-pins' : '#candidates'
		location.hash = view + '/' + candidateID
	},
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
			<article key={model.cid} className="candidate-summary clearfix" onClick={this._onclick}>
				<div className="images _ph_sg-3 _sg-3 _nr_sg-2">
					<div className="image">
						{ (avatar) && <img src={avatar} /> }
					</div>
					{ (partyAffiliation) && <span className={`can_party can_${partyAffiliation}`}> {partyAffiliation} </span> }
				</div>
				<div className="can_info _ph_sg-6 _sg-6 _nr_sg-8">
					{ (firstName) && <h4 className="card_title"><a href={`${view}/${candidateID}`} > {firstName} {middleNames} {lastName} </a></h4> }
					{ (electionCycle) && <span className="e_cycle"><strong>{electionCycle}</strong></span> }
					{ (electionRace) && <span className="e_race">{electionRace} </span> }
				</div>
				<div className="_ph_sg-3 _sg-3 _nr_sg-2">
					{ (postalCode) && <span className="zip"><i className="icon-location-pin"></i><br />{postalCode}</span> }
				</div>
			</article>
		)
	}
})