// ### LIBRARIES & SYSTEM
import React from 'react'
import Store from '../store'
import Actions from '../actions'

// ### COMPONENTS & VARIABLES
import { Header, Footer } from '../components/pageComponents'

// ### PRIMARY COMPONENTS
const Home = React.createClass({
	render() {
		return (
			<div className="body_wrapper page_home">
				<Header />
					<section className="hero">
						<div className="intro">
							<div>
								<h1>LWV Voter's Guide API</h1>
								<p>Building a better tomorrow through educated voters and non-partisan open data initiatives.</p>
								<a className="button drk-but">Api in Use</a><a className="button">Read the Docs</a>
							</div>
						</div>
					</section>
					<section>
						<div className="content_area">
							<article>
								<div>
									<h2>The League of Women Voter's "Voter's Guides"</h2>
									<p>Voters guides list candidates in contested races on state and national election ballots and provides their answers to policy questions posed by the League of Women Voters.</p>
									<p>The LWV Voters Guide API provides access to a JSON API, through which web and mobile app developers can pull data to, for example, enter an address and review races and ballot initiatives specific to that address.</p>
									<p>Voters guides are funded and published by the League of Women Voters Education Fund; a 501(c)(3) charitable trust, dedicated to encouraging informed and active participation in government.</p>
									<p>The League of Women Voters never endorses or opposes any candidate or political party. Questionnaires are sent to candidates in races that are contested. Candidate replies are reproduced exactly as submitted, without editing or verification.</p>
								</div>
							</article>
						</div>
					</section>
					<section>
						<div className="content_area clearfix">
							<article>
								<div className="illustration _sg-4">
									<img src="../images/github.png" />
								</div>
								<div className="_sg-8">
									<h2>Development and Contributions</h2>
									<p>This API aims to aleviate the cost of gathering, storing and disseminating the data crucial to the League's mission. The code for this api is openly available on our Github page. If you're a civic minded developer and would like to help out, feel free to fork and contribute to this project.</p>
								</div>
							</article>
						</div>
					</section>
				<Footer />
			</div>
		)
	}
})

export default Home