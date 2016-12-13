// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES


// ### PRIMARY COMPONENTS
const SearchBar = React.createClass({
	_searchCandidates(e) {
		let term = e.target.value
		Actions.searchCandidates(term)
	},
	render() {
		return (
			<input type="text" onKeyUp={this._searchCandidates} placeholder="" />
		)
	}
})

export default SearchBar