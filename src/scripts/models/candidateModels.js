import Backbone from 'Backbone'

export const CandidateModel = Backbone.Model.extend({
	urlRoot: '/api/candidates',
	idAttribute: '_id'
})

export const CandidateCollection = Backbone.Collection.extend({
	model: CandidateModel,
	url: '/api/candidates'
})

export const CandidateFavModel = Backbone.Model.extend({
	urlRoot: '/api/likes',
	idAttribute: '_id'
})

export const CandidateFavCollection = Backbone.Collection.extend({
	model: CandidateFavModel,
	url: '/api/likes'
})