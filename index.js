const express = require('express')
const app = express()
const port = 3000

const db = require('./config/mongoose')

const router =require('./routes') 
const expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.urlencoded())
app.set('view engine','ejs')
app.set('views','./views')
var passport = require('passport');
var session = require('express-session');
const passportLocal = require('./config/passport-local-strategy')
app.use(express.static('./assets'));
app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge:(1000*60*90)
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(expressLayouts)
app.set('layout extractStyles', true)
app.set('layout extractScripts', true);

app.use('/',router )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})