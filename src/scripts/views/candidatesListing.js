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
		return el.map((el, index) => <li key={index}><strong>Question: </strong><p>{el.question}</p><strong>Answer: </strong><p>{el.answer}</p></li>)
	},
	_phoneFormat(ph) {
		let num = ph.toString()
		return `(${num.slice(0,3)}) ${num.slice(3,7)}-${num.slice(7)}`
	},
	render() {
		// let {firstName,middleNames,lastName,avatar,locality} = model.attributes
		let model = this.props.model,
			firstName = model.get('firstName'),
			middleNames = model.get('middleNames'),
			lastName = model.get('lastName'),
			avatar = model.get('avatar'),
			education = model.get('education'),
			professionalExperience = model.get('professionalExperience'),
			communityInvolvement = model.get('communityInvolvement'),
			email = model.get('email'),
			website = model.get('website'),
			ph = model.get('phone'),
			phone = this._phoneFormat(ph),
			facebook = model.get('facebook'),
			twitter = model.get('twitter'),
			postalAddress = model.get('address')['street-address'],
			locality = model.get('address').locality,
			region = model.get('address').region,
			postalCode = model.get('address')['postal-code'],
			partyAffiliation = model.get('partyAffiliation'),
			electionCycle = model.get('electionCycle'),
			electionRace = model.get('electionRace'),
			questions = model.get('questions')
			console.log('question-log',questions)
		return (
			<article>
				<fieldset>
					<h3>{firstName} {middleNames} {lastName}</h3>
					<h4>Education</h4>
					<ul>{this._getArray(education)}</ul>
					<h4>Professional Experience</h4>
					<ul>{this._getArray(professionalExperience)}</ul>
					<h4>Community Involvement</h4>
					<ul>{this._getArray(communityInvolvement)}</ul>
				</fieldset>
				<fieldset>
					<h4>Contact Details</h4>
					<li>{phone}					</li>
					<li>{email}					</li>
					<li>{website}				</li>
					<li>{facebook}				</li>
					<li>{twitter}				</li>
					<div className="vcard">
						<span className="fn org">{firstName + ' ' + lastName} </span>
						<span className="adr">
							<span className="street-address">{postalAddress} </span>
							<span className="locality">{locality}, </span>  
							<span className="region">{region} </span>
							<span className="postal-code">{postalCode}</span>
						</span>
					</div>
				</fieldset>
				<fieldset>
					<h4>Campaign Details</h4>
					<li>{partyAffiliation}		</li>
					<li>{electionCycle}			</li>
					<li>{electionRace}			</li>
				</fieldset>
				<fieldset>
					<h4>Questions</h4>
					<ul>{this._getObjectArray(questions)}</ul>
				</fieldset>
			</article>
		)

	}
})

export default CandidatesListing