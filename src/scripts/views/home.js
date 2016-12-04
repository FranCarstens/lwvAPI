// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'

// ### PRIMARY COMPONENTS
const Home = React.createClass({
	render() {
		return (
			<div className="body_wrapper">
				<Header />
					<section className="content">
						hello
					</section>
				<Footer />
			</div>
		)
	}
})

export default Home