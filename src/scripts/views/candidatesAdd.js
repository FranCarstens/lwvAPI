// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import AddCandidate from '../components/candidateAdd'

// ### PRIMARY COMPONENTS
const CandidateAdd = React.createClass({
	render() {
		return (
			<div className="body_wrapper">
				<Header />
				<section className="content">
					<AddCandidate />
				</section>
				<Footer />
			</div>
		)
	}
})

export default CandidateAdd