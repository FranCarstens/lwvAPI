// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import Header from '../components/header'
import Footer from '../components/footer'
import UserLogin from '../components/userLogin'
import UserRegister from '../components/userRegister'


// ### PRIMARY COMPONENTS
const MyComponent = React.createClass({
	render() {
		return (
			<div className="body_wrapper">
				<div className="user_forms">
					<UserLogin />
					<UserRegister />
				</div>
			</div>
		)
	}
})

export default Login