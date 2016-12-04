// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'
import UserLogin from '../components/userLogin'
import UserRegister from '../components/userRegister'


// ### PRIMARY COMPONENTS
const Login = React.createClass({
	render() {
		return (
			<div className="body_wrapper">
				<Header />
				<section className="content">
					<div className="user_forms clearfix">
						<UserLogin />
						<UserRegister />
					</div>
				</section>
				<Footer />
			</div>
		)
	}
})

export default Login