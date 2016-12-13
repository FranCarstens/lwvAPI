var fs = require('fs')
var csv = require('fast-csv')
var Candidate = require('./db/schema').Candidate

var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/leagueAPI_dev', function(err,db) {
// 	if (err) {console.log(err)}
// 	else console.log('connected')
// })

const importCsv = function(csvFile) {
	var stream = fs.createReadStream(csvFile)
	var candidates = []
	csv.fromStream(stream, {headers:true, ignoreEmpty:true})
		.transform(function(data){
			return formatIncomingData(data)
		})
		.on('data', function(data) {
			candidates.push(data)
		})
		.on('end', function() {
			// console.log('done')
			Candidate.insertMany(candidates,function(err, docs) {
				console.log('ERROR', err)
				console.log('DOCS',docs)
			})
		})
}

module.exports = {
	importCsv: importCsv
}


const formatIncomingData = function(data) {
	// console.log(data)
	const sanitizeURL = function(str) {
		var url = 'https://'.concat(str.replace(/\b.*\/\//g,''))
		return url
	}
	const sanitizePhone = function(str) {
		var no = str.replace(/[^\d]/g,'')
		return Number(no.substring(no.length-10))
	}
	const populateArray = function(dataKey) {
		var dataArr = dataKey.split(/\r/g)
		return dataArr
	}
	const populateQObject = function(Q,A) {
		var qObjectArray = []
		for ( var key in data ) {
			var tempObj = {}
			for ( var i = 0; i < 2; i++) {
				if (key.indexOf(Q) !== -1 || key.indexOf(A) !== -1) {
					var keyName
				}
			}
		}		
	}
	const populateQArray = function(Q,A) {
		var qArr = []
		for ( var key in data ) {
			if (key.indexOf(Q) !== -1 || key.indexOf(A) !== -1) {
				var prop = (key.slice(0,-2))
				if ( !qArr[key.slice(-1)-1] ) {
					qArr[key.slice(-1)-1] = {}
					qArr[key.slice(-1)-1][prop] = data[key]
				}
				else qArr[key.slice(-1)-1][prop] = data[key]
			}
		}
		return qArr
	}
	const newData = {
		'firstName': data.firstName,
		'middleNames': data.middleNames,
		'lastName': data.lastName,
		'fullName': data.firstName + ' ' + data.middleNames + ' ' + data.lastName,
		'avatar': data.avatar,
		'education': populateArray(data.education),
		'professionalExperience': populateArray(data.professionalExperience),
		'communityInvolvement': populateArray(data.communityInvolvement),	
		'email': data.email,
		'website': sanitizeURL(data.website),
		'phone': sanitizePhone(data.phone),
		'facebook': sanitizeURL(data.facebook),
		'twitter': sanitizeURL(data.twitter),
		'address': {
			'streetAddress': data.streetAddress,
			'locality': data.locality,
			'region': data.region,
			'postalCode': data.postalCode,
			'countryName': 'US',
		},
		'partyAffiliation': data.partyAffiliation,
		'electionCycle': data.electionCycle,
		'electionRace': data.electionRace,
		'questions': populateQArray('question','answer') // possible another method
	}
	return newData
}

// console.log('done inserted')

// importCsv()