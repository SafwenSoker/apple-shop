const express = require('express')
const router = express.Router()
const Course = require('./models/Course')


router.get('/', (req, res) => {
    Course.find({})
    .then(courses => res.status(200).json(courses))
    .catch(err => res.status(400).json({error: err.message}))
    
} )

module.exports = router