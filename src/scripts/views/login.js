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
	componentWillMount() {
		Store.on('dataChanged', () => {
			this.setState(
				Store._getData()
			)
		})
	},
	componentDidMount() {
		Store._setData({
			isLoading: false
		})
	},
	getInitialState() {
		return Store._getData()
	},
	render() {
		// console.log(this.state.users)
		let userCount = this.state ? this.state.users.length : ''
		return (
			<div className="body_wrapper">
				<Header />
				<section className="content">
					<div className="user_forms clearfix">
						<UserRegister userCount={userCount} />
						<UserLogin />
					</div>
				</section>
				<Footer />
			</div>
		)
	}
})

export default Login