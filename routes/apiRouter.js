let Router = require('express').Router;
const apiRouter = Router()
let fs = require('fs')
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Candidate = require('../db/schema.js').Candidate
let Favorite = require('../db/schema.js').Favorite

// ### USERS

apiRouter
	.get('/users', function(req, res){
		User.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
				res.json(results)
		})
	})

apiRouter
	.get('/users/:_id', function(req, res){
		User.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
				res.json(record)
		})
	})
	.put('/users/:_id', function(req, res){

		User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send('no record found with that id')
			}
			else {
				res.json(Object.assign({},req.body,record))
			}
		})
	})

	.delete('/users/:_id', function(req, res){
		User.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
				res.json({
					msg: `record ${req.params._id} successfully deleted`,
					_id: req.params._id
			})
		})  
	})

// Routes for a Model(resource) should have this structure

// ### CANDIDATES ROUTES

apiRouter

	.post('/candidates', function(req,res) {
		let recordObj = new Candidate(req.body)
		recordObj.save(function(err) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(recordObj)
			}
		})
	})
	.put('/candidates/:_id', function(req, res) {
		Candidate.findByIdAndUpdate(req.params._id, req.body, function(err, record) {
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send('could not locate the candidate you are trying to update')
			}
			else {
				res.json(Object.assign({}, req.body, record))
			}
		})
	})
	.get('/candidates', function(req,res) {
		Candidate.find(req.query, function(err, records) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(records)
			}
		})
	})
	.get('/candidates/:_id', function(req,res) {
		Candidate.findById(req.params._id, function(err, record) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(record)
			}
		})
	})
	.delete('/candidates/:_id', function(req,res) {
		delete req.body._id
		Candidate.findByIdAndRemove(req.params._id, req.body, function(err, record) {
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send('the candidate record you\'re attempting to delete does not exist')
			}
			else {
				res.json(req.body)
			}
		})
	})

// ### FAV ROUTES
apiRouter
	.post('/likes', function(req,res) {
		let recordObj = new Favorite(req.body)
		recordObj.save(function(err) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(recordObj)
			}
		})
	})
	.get('/likes', function(req,res) {
		Favorite.find(req.query, function(err, records) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(records)
			}
		})
	})
	.get('/likes/:_id', function(req,res) {
		Favorite.findById(req.params._id, function(err, record) {
			if (err) {
				res.status(400).send(err)
			}
			else {
				res.json(record)
			}
		})
	})

module.exports = apiRouter