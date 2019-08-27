var mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    courseCode:{
        type:String,
        lowercase:true
    },
    courseName:{
        type:String,
        lowercase:true
    }

})
module.exports = mongoose.model('course',courseSchema)