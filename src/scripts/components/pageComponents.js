// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
export const Header = React.createClass({
	render() {
		return (
			<header id="header">
				<nav>
					<ul>
						<li><a href="#candidates">Candidates</a></li>
						<li><a href="#candidates/add">Add</a></li>
						<li><a href="#candidates/import">Import</a></li>
						<li><a href="#login">Login</a></li>
						<li><a href="#" onClick={Actions.logoutUser}>Logout</a></li>
					</ul>
				</nav>
			</header>
		)
	}
})

export const Footer = React.createClass({
	render() {
		return (
			<footer id="footer">
				<p>a footer wanders alone.</p>
			</footer>
		)
	}
})