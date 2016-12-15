// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import Candidates from '../components/candidates'

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
		let currentColl = this.state.candidates,
			contentClass = (this.state.searchQ.length !== 0) ? 'loaded' : 'unloaded'
		console.log('current state',this.state)
		return (
			<div className={`body_wrapper candidatesListing ${contentClass}`}>
				<Header />
				<div className="content_wrapper">
					{ (this.state.candidate.length !== 0) ? <Candidates collection={currentColl} query={this.state.searchQ} /> : <div className="loading"></div> }
				</div>
				<Footer />
			</div>
		)
	}
})

export default CandidatesListing