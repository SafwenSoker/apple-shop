const Course = require('./../models/course')

const allCourses = (req, res) => {
    Course.find({})
    .then(courses => res.status(200).json(courses))
    .catch(err => res.status(400).json({error: err.message}))
    
}
const getCourse = (req,res,next) => {
    Course.findOne({ _id: req.params.id})
        .then(course => res.status(200).json(course))
        .catch(error => res.status(404).json({error}))
}
const createCourse = (req,res,next) => {
    console.log(req.body);
    const course = new Course({
        ...req.body
    });
    course.save()
        .then(course => res.status(201).json({message: 'Course created'}))
        .catch(error => res.status(400).json({error}))
}

const updateCourse = (req,res,next) => {
    Course.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Course updated'}))
    .catch(error => res.status(400).json({error}));
}

const deleteCourse = (req,res, next) => {
    Course.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({message: 'Course deleted !'}))
    .catch(error => res.status(400).json({error}))
}
module.exports = {
    allCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}