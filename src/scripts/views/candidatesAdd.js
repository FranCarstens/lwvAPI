// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer, IsLoading } from '../components/pageComponents'
import AddCandidate from '../components/candidateAdd'

// ### PRIMARY COMPONENTS
const CandidateAdd = React.createClass({
	componentWillMount() {
		Store.on('dataChanged', () => {
			this.setState(
				Store._getData()
			)
		})
	},
	componentDidMount() {
		Store._setData({
			isLoading: false
		})
	},
	getInitialState() {
		return Store._getData()
	},
	render() {
		return (
			<div className="body_wrapper">
				<Header />
				<section className="content">
					<IsLoading isLoading={isLoading} />
					<AddCandidate />
				</section>
				<Footer />
			</div>
		)
	}
})

export default CandidateAdd