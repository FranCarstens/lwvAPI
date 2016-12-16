// ### LIBRARIES & SYSTEM
import Backbone from 'backbone'
import _ from 'underscore'
import {
	CandidateModel, CandidateCollection,
	CandidateFavModel, CandidateFavCollection
		} from './models/candidateModels'
import { UserCollection } from './models/userModel'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
const Store = _.extend(Backbone.Events, {
	_data: {
		candidates: new CandidateCollection(),
		candidate: new CandidateModel(),
		candidateFavs: new CandidateFavCollection(),
		candidateFav: new CandidateFavModel(),
		users: new UserCollection(),
		searchQ: '',
		isLoading: 'true'
	},
	_getDataProp(Prop) {
		return this._data[Prop]
	},
	_getData() {
		return this._data
	},
	_emitChange() {
		this.trigger('dataChanged')
	},
	_setData(dataObj) {
		this._data = _.extend(this._data, dataObj)
		this._emitChange()
	},
	_initialize(newData) {
		this._getDataProp('candidates').on('update sync', () => this._emitChange())
	}
})

Store._initialize()
export default Store