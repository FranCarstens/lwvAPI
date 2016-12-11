// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'
import H from '../helpers'

// ### COMPONENTS & VARIABLES
import SubmissionForm from '../components/submissionForm'

// ### PRIMARY COMPONENTS
const AddCandidate = React.createClass({
	render() {
		return (
			<div className="forms_container">
				<div className="candidate_form_container">
					<SubmissionForm  />
				</div>
			</div>
		)
	}
})

export default AddCandidate