var express = require('express')
var router = express.Router()
var studentController = require('../controllers/StudentController')
var courseController = require('../controllers/CourseController')
var enrollController = require('../controllers/EnrollementController')

//student routes
router.post('/addstudent',studentController.Addstudent)


//courses routes
router.post('/addcourse',courseController.Addcourse)

//enroll routes
router.post('/enroll',enrollController.addEnroll)

module.exports = router