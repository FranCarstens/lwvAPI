// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer, IsLoading } from '../components/pageComponents'
import CandidateImportForm from '../components/candidateImport'

// ### PRIMARY COMPONENTS
const CandidateImport = React.createClass({
	componentWillMount() {
		Store.on('dataChanged', () => {
			this.setState(
				Store._getData()
			)
		})
		Store._setData({
			isLoading: true
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
		let isLoading = !this.state.isLoading ? 'hidden' : 'visible'
		return (
			<div className="body_wrapper">
				<Header />
				<IsLoading isLoading={isLoading} />
				<section className="content">
					<CandidateImportForm />
				</section>
				<Footer />
			</div>
		)
	}
})

export default CandidateImport