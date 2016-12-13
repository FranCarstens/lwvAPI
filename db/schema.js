const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
	// required for authentication: DO NOT TOUCH Or You May Get Punched
	email: 		{ type: String, required: true },
	password: 	{ type: String, required: true },
	// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

	// example of optional fields
	username: 	{ type:String, unique: true},
	roleID:		{ type: Number, default: 3 },
	createdAt: 	{ type: Date, default: Date.now }

})

const candidateSchema = new mongoose.Schema({

	firstName: { type: String, required: true },
	middleNames: String,
	lastName: { type: String, required: true },
	fullName: { type: String, required: true },
	avatar: String,
	education: Array,
	professionalExperience: Array,
	communityInvolvement: Array,
	email: { type:String, unique: true},
	website: String,
	phone: Number,
	facebook: String,
	twitter: String,
	address: Object,
	partyAffiliation: { type: String, required: true },
	electionCycle: { type: String, required: true },
	electionRace: { type: String, required: true },
	questions: Array,
	createdAt: 	{ type: Date, default: Date.now }

})

const favoriteSchema = new mongoose.Schema({

	firstName: { type: String, required: true },
	middleNames: String,
	lastName: { type: String, required: true },
	fullName: { type: String, required: true },
	avatar: String,
	education: Array,
	professionalExperience: Array,
	communityInvolvement: Array,
	email: { type:String, unique: true},
	website: String,
	phone: Number,
	facebook: String,
	twitter: String,
	address: Object,
	partyAffiliation: { type: String, required: true },
	electionCycle: { type: String, required: true },
	electionRace: { type: String, required: true },
	questions: Array,
	userID: {type: String, required: true },
	createdAt: 	{ type: Date, default: Date.now }

})


module.exports = {
	User: mongoose.model('User', usersSchema),
	Candidate: mongoose.model('Candidate', candidateSchema),
	Favorite: mongoose.model('Favorite', favoriteSchema)
}