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
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#candidates">Candidates</a></li>
							{ ( H.userRole() > 0 )
								? <li><a href="#my-pins">My Pins</a></li> : '' }
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
				<div className="footer_container">
				<div className="">

				</div>
				<div className="">
					<h4>League of Women's Voters</h4>
					<ul>
						<li><a href="http://lwv.org/">LWV of the US</a></li>
						<li><a href="http://lwvhouston.org/">LWV of Texas</a></li>
						<li><a href="http://www.lwvtexas.org/">LWV of Houston</a></li>
						<li><a href="http://lwv.org/get-involved/local-leagues">Local Leagues</a></li>
					</ul>
				</div>
				<p>a footer wanders alone.</p>
				</div>
			</footer>
		)
	}
})