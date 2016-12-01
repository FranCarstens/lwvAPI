import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

const app () {

	const Controller = new Backbone.Router.extend({

		// ### BACKBONE ROUTES
		routes: {
			'home' : 'handleHome',
			'candidates' : 'handleCandidates',
			'candidates/:id' : 'handleCandidate',
			'login' : 'handleLogin',
			'docs' : 'handleDocs',
			'*default' : 'handleDefault'
		},
		// ### ROUTE HANDLERS
		handleHome() {
			ReactDOM.render(<Home />, document.querySelector('body_container'))
		},
		handleCandidates() {
			ReactDOM.render(<CandidatesListing />, document.querySelector('.body_container'))
		},
		handleCandidate() {
			ReactDOM.render(<CandidateView />, document.querySelector('.body_container'))
		},
		handleLogin() {
			ReactDOM.render(<Login />, document.querySelector('.body_container'))
		},
		handleDocs() {
			ReactDOM.render(<Docs />, document.querySelector('.body_container'))
		},
		handleDefault() {
			location.hash = 'home'
		},
		initialize() {
			Backbone.history.start()
		}

	})

}

const app = function() {
  document.querySelector('.container').innerHTML = "<h1>Woah!</h1>"
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..