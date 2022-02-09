const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
const courseRouter = require('./routes/courses')
const app = express();
//you can connect either your using atlas or by installing mongodb locally
mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Connected successfully to mongodb Atlas'))
    .catch(()=> console.log('Failed to connect to mongodb Atlas'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/courses', courseRouter)

module.exports = app;
