const express = require('express')
const router = express.Router()
const Course = require('./../courses-api.mongodb')

const courseController = require('./../controllers/course')

router.get('/', courseController.allCourses);
router.get('/:id', courseController.getCourse);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse );
router.delete('/:id', courseController.deleteCourse);
module.exports = router 