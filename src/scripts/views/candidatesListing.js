// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import { CandidateModel, CandidateCollection } from '../models/candidateModels'
// import { Candidate } from '../components/candidateArticle'

// ### PRIMARY COMPONENTS
const CandidatesListing = React.createClass({
	componentWillMount() {
		Actions.fetchCandidates()
		Store.on('dataChanged', () => {
			this.setState(
				Store._getData()
			)
		})
	},
	componentWillUnmount() {
		Store.off('dataChanged')
	},
	getInitialState() {
		return Store._getData()
	},
	render() {
		return (
			<div className="body_wrapper">
				<Header />
				<Candidates collection={this.state.candidates} />
				<Footer />
			</div>
		)
	}
})

const Candidates = React.createClass({
	_getModels(coll) {
		return coll.map((el,index) => <Candidate model={el} key={index} /> )
	},
	render() {
		let coll = this.props.collection
		return (
			<section className="content">
				{ this._getModels(coll) }
			</section>
		)
	}
})

const Candidate = React.createClass({
	_getArray(el) {
		return el.map((el, index) => <li key={index}>{el}</li>)
	},
	_getObjectArray(el) {
		return el.map((el, index) => <dl><dt key={index}><span className="dropCap">Q </span>{el.question}</dt><dd><span className="dropCap">A </span>{el.answer}</dd></dl>)
	},
	_phoneFormat(ph) {
		let num = ph.toString()
		return `(${num.slice(0,3)}) ${num.slice(3,7)}-${num.slice(7)}`
	},
	render() {
		
		let model = this.props.model,
			{firstName, middleNames, lastName, avatar, education, professionalExperience, communityInvolvement, email, website, phone, facebook, twitter, address: {streetAddress, locality, region, postalCode}, partyAffiliation, electionCycle, electionRace, questions} = model.attributes,
			ph = this._phoneFormat(phone)
		return (
			<article>
				<fieldset>
					{ (firstName)	? <h3>{firstName} {middleNames} {lastName}</h3>		: '' }
					{ (education[0]) 	? <h4>Education</h4>								: '' }
					{ (education[0]) 	? <ul>{this._getArray(education)}</ul>				: '' }
					{ (professionalExperience[0])	? <h4>Professional Experience</h4>					: '' }
					{ (professionalExperience[0])	? <ul>{this._getArray(professionalExperience)}</ul>	: '' }
					{ (communityInvolvement[0]) 	? <h4>Community Involvement</h4>					: '' }
					{ (communityInvolvement[0]) 	? <ul>{this._getArray(communityInvolvement)}</ul>	: '' }
				</fieldset>
				<fieldset>
					<h4>Contact Details</h4>
					{ (ph) 			? <li><i className="icon-phone"></i>{ph}</li> 			: '' }
					{ (email) 		? <li><i className="icon-mail"></i>{email}</li> 		: '' }
					{ (website) 	? <li><i className="icon-compass"></i>{website}</li> 	: '' }
					{ (facebook)	? <li><i className="icon-facebook"></i>{facebook}</li>	: '' }
					{ (twitter) 	? <li><i className="icon-twitter"></i>{twitter}</li>	: '' }
					{ (streetAddress) 	? <div className="vcard"><i className="icon-location-pin"></i>
						<span className="fn org">{firstName + ' ' + lastName} </span>
						<span className="adr">
							<span className="street-address">{streetAddress} </span>
							<span className="locality">{locality}, </span>  
							<span className="region">{region} </span>
							<span className="postal-code">{postalCode}</span>
						</span>
					</div> : '' }
				</fieldset>
				<fieldset>
					<h4>Campaign Details</h4>
					{ (partyAffiliation)	? <li>{partyAffiliation}</li>	: '' }
					{ (electionCycle) 		? <li>{electionCycle}</li>		: '' }
					{ (electionRace) 		? <li>{electionRace}</li>		: '' }
				</fieldset>
				<fieldset>
					<h4>Questions</h4>
					{this._getObjectArray(questions)}
				</fieldset>
			</article>
		)

	}
})

export default CandidatesListing