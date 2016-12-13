// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import SearchBar from './searchBar'
import { CandidateSummary } from './candidateArticle'

// ### PRIMARY COMPONENTS
const Candidates = React.createClass({
	_refineModels(coll) {
		let query=this.props.query.toLowerCase()
		return Actions.refineModels(coll,query)
	},
	render() {
		let coll = this.props.collection
		if (location.hash === "#candidates") {
			return (
				<section className="content searchView">
					<header id="search">
						<h2>Search Candidates</h2>
						<p>Search for candidates by name, zipcode or electoral race.</p>
						<SearchBar />
					</header>
					{ this._refineModels(coll) }
				</section>
			)
		}
		else {
			return (
				<section className="content favView">
					<h2>My Pins</h2>
					{ coll.map((el,index) => <CandidateSummary model={el} view="userpins" />) }
				</section>
			)
		}
	}
})

export default Candidates