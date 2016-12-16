// ### LIBRARIES & SYSTEM
import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import {MultiField, QuestionField} from '../components/specialFields'

// ### PRIMARY COMPONENTS
const AddCandidate = React.createClass({
	render() {
		return (
			<div className="forms_container">
				<CandidateImportForm />
			</div>
		)
	}
})
// <CandidateAddForm />

const CandidateImportForm = React.createClass({
	componentDidMount: function() {
		window.form = this.refs.daForm
	},

	_importCandidate(e) {
		e.preventDefault()
		let file = e.target.file.files
		Actions.importCandidate(file)
	},
	_dropHandler: function(file) {
		var csv = new FormData();
		csv.append('csv', file[0]);

		request.post('/upload')
			.send(csv)
			.end(function(err, resp) {
				if (err) { console.error(err) }
				else console.log(resp, csv)
				return resp
			})
	},
	render() {
		return (
			<div className="drop_container">
				<h3>Import Candidates</h3>
				<p>CSV should follow the correct structure. Please reference the <a href="#docs">documentation</a> for more information.</p>
				<Dropzone disableClick={false} multiple={false} accept={'text/csv'} onDrop={this._dropHandler}>
					<div> Drag-n-Drop a csv, or click to add. </div>
				</Dropzone>
			</div>
		)
	}
})

export default CandidateImportForm


 // onSubmit={this._importCandidates}