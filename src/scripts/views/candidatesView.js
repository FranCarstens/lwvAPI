// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'
import H from '../helpers'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import { CandidateModel, CandidateCollection } from '../models/candidateModels'
import { Candidate } from '../components/candidateArticle'

// ### PRIMARY COMPONENTS
const CandidateView = React.createClass({
	componentWillMount() {
		let candidateID = H.grabRoute(location.hash,1)
		Actions.fetchCandidate(candidateID)
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
		let isLoading = !this.state.isLoading ? 'hidden' : 'visible'
		return (
			<div className="body_wrapper">
				<Header />
					<section className="content">
						<div className={`loading ${isLoading}`}><span id="load_inner"></span></div>
						{ this.state.candidate.id && <Candidate model={this.state.candidate} />}
					</section>
				<Footer />
			</div>
		)
	}
})

export default CandidateView


// className={`loading ${isLoading}`}