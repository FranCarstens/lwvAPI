// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import CandidateImportForm from '../components/candidateImport'

// ### PRIMARY COMPONENTS
const CandidateImport = React.createClass({
	render() {
		return (
			<div className="body_wrapper">
				<Header />
				<section className="content">
					<CandidateImportForm />
				</section>
				<Footer />
			</div>
		)
	}
})

export default CandidateImport