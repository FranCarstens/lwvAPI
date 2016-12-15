// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import Candidates from '../components/candidates'

// ### PRIMARY COMPONENTS
const FavListing = React.createClass({
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
		let currentColl = this.state.candidateFavs
		console.log('thestore', Store._data, 'thestate', this.state, 'currentcoll', currentColl)
		return (
			<div className="body_wrapper candidatesListing">
				<Header />
				{ (this.state.candidate.length !== 0) ? <Candidates collection={currentColl} /> : <div className="loading"></div> }
				<Footer />
			</div>
		)
	}
})

export default FavListing