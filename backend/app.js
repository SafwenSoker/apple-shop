const http = require('http')
const express = require('express')
const app = express()

app.use((req, res) => res.json('Hello wld!') )

module.exports = app;
