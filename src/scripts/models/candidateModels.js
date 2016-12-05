import Backbone from 'Backbone'

export const CandidateModel = Backbone.Model.extend({
	urlRoot: '/api/candidates',
	// idAttribute: '_id'
})

export const CandidateCollection = Backbone.Collection.extend({
	model: CandidateModel,
	url: '/api/candidates'
})