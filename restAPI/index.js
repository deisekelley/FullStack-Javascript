const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/dbevents')
mongoose.Promise = global.Promise

app.use(bodyParser.json())
//initialize routes
app.use('/api',require('./routes/api'))

//listen for requests
app.listen(4000,function(){
  console.log('now listening for requests')
})