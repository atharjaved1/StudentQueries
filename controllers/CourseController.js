const courseModel = require('../models/course')

const Addcourse = (req,res ) => {

    let newCourse = new courseModel(req.body.course);

    newCourse.save((err,course) => {
        if(err) {
            res.status(500).json({
                message:"Course Not Added! Please try again."
            })
        }
        else {
            res.status(200).json({
                message:"Course Added Successfully ",
                course
            })
        }
    })
}

module.exports = {
    Addcourse
}