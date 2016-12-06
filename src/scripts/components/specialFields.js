// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'
import _ from 'underscore'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
export const MultiField = React.createClass({
	
	componentWillMount() {
		let type=this.props.type
		this.setState({inputGroup: [<input name={`${type}_0`} key={0} type="text" />]})
	},
	_addInput(e){
		e.preventDefault()
		let type=this.props.type,
			label=this.props.label,
			currentGroup = this.state.inputGroup,
			i = currentGroup.length,
			newInput = <input name={`${type}_${i}`} key={i} type="text" />
		currentGroup.push(newInput)
		this.setState({inputGroup: currentGroup})
	},
	render() {
		let type=this.props.type,
			label=this.props.label
		return (
			<fieldset className={`group_${type}`}>
				<legend>{label}</legend>
				{this.state.inputGroup}
				<button className="button" onClick={this._addInput}>Add<i className="icon-plus"></i></button>
			</fieldset>
		)
	}
})

export const QuestionField = React.createClass({
	
	componentWillMount() {
		let type=this.props.type,
			label=this.props.label,
			i = 0
		this.setState({inputGroup: [<Questions type={type} label={label} i={i} />]})
	},
	_addInput(e){
		e.preventDefault()
		let type=this.props.type,
			label=this.props.label,
			currentGroup = this.state.inputGroup,
			i = currentGroup.length,
			newInput = <Questions type={type} label={label} i={i} />
		currentGroup.push(newInput)
		this.setState({inputGroup: currentGroup})
	},
	render() {
		let type=this.props.type,
			label=this.props.label
		return (
			<fieldset className={`group_${type}`}>
				<legend>{label}</legend>
				{this.state.inputGroup}
				<button className="button" onClick={this._addInput}>Add +</button>
			</fieldset>
		)
	}
})

const Questions = React.createClass({
	render() {
		let type=this.props.type,
			label=this.props.label,
			i = this.props.i		
		return (
			<fieldset key={i} >
				<label>Question</label>
				<input name={`${type}_q_0`} type="text" />
				<label>Answer</label>
				<textarea name={`${type}_a_0`} type="text" />
			</fieldset>
		)
	}
})