// ### LIBRARIES & SYSTEM
import Backbone from 'backbone'
import _ from 'underscore'

// ### COMPONENTS & VARIABLES

// ### PRIMARY COMPONENTS
const Store = _.extend(Backbone.Events, {
	_data: {
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
		// this._getDataProp('').on('update sync', () => this._emitChange())
	}
})

Store._initialize()
export default Store