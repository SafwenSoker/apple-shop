const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    image: {
        type: string,
        required: true
    },
    last_update: {
        type: string,
        required: true
    },
    insctructor: {
        type: string,
        required: true
    },
    language: {
        type: string,
        required: true
    },
    price: {
        type: number,
        required: true
    },
    goals: {
        type: array,
        required: true
    },
    requirements: {
        type: array,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema);