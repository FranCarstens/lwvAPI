// ### LIBRARIES & SYSTEM
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

// ### COMPONENTS & VARIABLES
import Home from './views/home'
import Login from './views/login'
import CandidatesListing from './views/candidatesListing'
import CandidateAdd from './views/candidatesAdd'
import CandidateImport from './views/candidatesImport'
import StyleGuide from './views/styleguide'

const app = function() {

	const Controller = Backbone.Router.extend({

		// ### BACKBONE ROUTES
		routes: {
			'home' : 'handleHome',
			'candidates' : 'handleCandidates',
			'candidates/add' : 'handleAdd',
			'candidates/import': 'handleImport',
			'candidates/:id' : 'handleCandidate',
			'login' : 'handleLogin',
			'docs' : 'handleDocs',
			'styles' : 'handleStyles',
			'*default' : 'handleDefault'
		},
		// ### ROUTE HANDLERS
		handleHome() {
			console.log('handlehome')
			ReactDOM.render(<Home />, document.querySelector('.body_container'))
		},
		handleCandidates() {
			console.log('handlecandies')
			ReactDOM.render(<CandidatesListing />, document.querySelector('.body_container'))
		},
		handleCandidate() {
			console.log('handlecandy')
			ReactDOM.render(<CandidateView />, document.querySelector('.body_container'))
		},
		handleAdd() {
			console.log('handleadd')
			ReactDOM.render(<CandidateAdd />, document.querySelector('.body_container'))
		},
		handleImport() {
			console.log('handleimport')
			ReactDOM.render(<CandidateImport />, document.querySelector('.body_container'))
		},
		handleLogin() {
			console.log('handlelogin')
				ReactDOM.render(<Login />, document.querySelector('.body_container'))
		},
		handleDocs() {
			console.log('handledocs')
			ReactDOM.render(<Docs />, document.querySelector('.body_container'))
		},
		handleStyles() {
			console.log('handleStyles')
			ReactDOM.render(<StyleGuide />, document.querySelector('.body_container'))
		},
		handleDefault() {
			console.log('handledefault')
			location.hash = 'home'
		},
		initialize() {
			Backbone.history.start()
		}

	})

	new Controller()

}

// const app = function() {
//   document.querySelector('.container').innerHTML = "<h1>Woah!</h1>"
// }

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..