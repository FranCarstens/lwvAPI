global.PROJECT_NAME = 'leagueAPI'

if (!global.PROJECT_NAME) { //« set by npm run init-dev »
	throw new Error('no project name set. did you forget to run "npm run init-dev"?')
}
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x



const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const renderFile = require('ejs').renderFile
const fs = require('fs')

// ### ADDING MULTER P 1
const multer  = require('multer')

// ### ADDING CSVREAD
const importCsv = require('./csvRead').importCsv



// Load Configuration
const appMiddleWare = require('./config/middleware.js')
const appSecrets = require('./config/secrets.js')
const appAuthentication = require('./config/auth.js')
const connectToDB = require('./config/db-setup.js').connectToDB

// Import Routers
let indexRouter = require('./routes/indexRouter.js')
let authRouter = require('./routes/authRouter.js')
let apiRouter = require('./routes/apiRouter.js')

// Load DB User Model (for appAuthentication configuration)
let User = require('./db/schema.js').User


// =========
// RUN APP
// =========
const app = express()
const PORT = process.env.PORT || 3000
app.set('port', PORT)

// =========
// VIEW ENGINE
// =========
app.set('views', './dist/views');
app.engine('html', renderFile)
app.set('view engine', 'html');

// =========
// DATABASE
// =========
connectToDB(global.PROJECT_NAME)

// =========
// APPLICATION MIDDLEWARE 
// =========
app.use( express.static( __dirname + '/dist/assets') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded() );
app.use( cookieParser() );
app.use( session({secret: appSecrets.sessionSecret }) );
app.use( passport.initialize() );
app.use( passport.session() );
appAuthentication(User)
app.use( appMiddleWare.cookifyUser )
app.use( appMiddleWare.parseQuery )

// ### ADDING MULTER P 1

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {

    // cb(null, file.originalname + '-' + Date.now() + '.csv')
    cb(null, 'candidates-' + Date.now() + '.csv')
  }
})

var upload = multer({ storage: storage });
// var upload = multer({ dest: './upload'});
app.post('/upload', upload.single('csv'), function(req, res, next){
	var files = fs.readdirSync('./upload')
	// console.log(files)
  var dataFile = req.file.path
  // console.log('YOUR REQUEST',req.file.path)
  // res.status(200).send('file received');
  // console.log(importCsv)
  importCsv(dataFile)
});



// 
// =========
// ROUTERS
// =========

app.use( '/', indexRouter )
app.use( '/auth', authRouter )
app.use( '/api', apiRouter )

app.use(appMiddleWare.errorHandler);

app.listen(PORT,function() {
  console.log('\n\n===== listening for requests on port ' + PORT + ' =====\n\n')
})
