// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer, IsLoading } from '../components/pageComponents'
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
		let currentColl = this.state.candidateFavs,
			isLoading = !this.state.isLoading ? 'hidden' : 'visible'
		return (
			<div className="body_wrapper candidatesListing">
				<Header />
				<section className="content">
					<IsLoading isLoading={isLoading} />
					{ (this.state.candidate.length !== 0) && <Candidates collection={currentColl} /> }
				</section>
				<Footer />
			</div>
		)
	}
})

export default FavListing

// className={`loading ${isLoading}`}