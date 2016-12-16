// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'
import H from '../helpers'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
export const Header = React.createClass({
	render() {
		return (
			<header id="header">
				<div className="header_container">

					<nav>
						<div className="logo"><img src="../images/logo.png" /></div>
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#candidates">Search</a></li>
							{ ( H.userRole() > 0 )
								? <li><a href="#my-pins">My Candidates</a></li> : '' }
							{ ( H.userRole() === 1 )
								? <li><a href="#candidates/add">Add</a></li> : '' }
							{ ( H.userRole() === 1 )
								? <li><a href="#candidates/import">Import</a></li> : '' }
							{ ( !H.userRole() > 0 )
								? <li><a href="#login">Login</a></li> : '' }
							{ ( H.userRole() > 0 )
								? <li><a href="#" onClick={Actions.logoutUser}>Logout</a></li> : '' }
						</ul>
					</nav>
				</div>
			</header>
		)
	}
})

export const Footer = React.createClass({
	render() {
		return (
			<footer id="footer">
				<div className="footer_container clearfix">
					<div className="logo _sg-12 _nr_sg-4 _nl_sg-6">
						<img src="../images/logo_w.png" />
					</div>
					<nav className="_sg-6 _nr_sg-4 _nl_sg-3">
						<h4>The League</h4>
						<ul>
							<li><a href="http://www.vote411.org">Vote411</a></li>
							<li><a href="http://lwv.org/">LWV of the US</a></li>
							<li><a href="http://lwvhouston.org/">LWV of Texas</a></li>
							<li><a href="http://www.lwvtexas.org/">LWV of Houston</a></li>
							<li><a href="http://lwv.org/get-involved/local-leagues">Local Leagues</a></li>
						</ul>
					</nav>
					<nav className="_sg-6 _nr_sg-4 _nl_sg-3">
						<h4>Open Data</h4>
						<ul>
							<li><a href="http://sunlightfoundation.com/api/">Sunlight Foundation API</a></li>
							<li><a href="http://sunlightfoundation.com/opendataguidelines/">Open Data Guidelines</a></li>
							<li><a href="https://www.govtrack.us/">GovTrack</a></li>
							<li><a href="https://www.govtrack.us/congress/bills/114/s2852">Open Government Data Act</a></li>
							<li><a href="http://januaryadvisors.com">January Advisors</a></li>
						</ul>
					</nav>
					<p className="footer_license">Licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>, unless otherwise noted. | Made at The Iron Yard, Houston | Find us on Github</p>
				</div>
			</footer>
		)
	}
})
export const IsLoading = React.createClass({
	render() {
		let isLoading = this.props.isLoading
		return (
			<div className={`loading ${isLoading}`}><span id="load_inner"></span></div>
			)
	}
})