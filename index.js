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

app.use(express.static('./assets'));

app.use(expressLayouts)
app.set('layout extractStyles', true)
app.set('layout extractScripts', true);

app.use('/',router )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})