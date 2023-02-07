const express = require('express')
const app = express()
const port = 3000

const db = require('./config/mongoose')

const router =require('./routes') 
const expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs')
app.set('views','./views')
app.use(expressLayouts)

app.use('/',router )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})