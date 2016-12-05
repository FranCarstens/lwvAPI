let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Candidate = require('../db/schema.js').Candidate

// ### USERS

apiRouter

apiRouter

// Routes for a Model(resource) should have this structure

 // ### CANDIDATES ROUTES

apiRouter

	.post('/candidates', function(req,res) {
		var recordObj = new Candidate(req.body)
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



module.exports = apiRouter