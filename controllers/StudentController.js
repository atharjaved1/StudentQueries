const studentModel = require('../models/Student')

const Addstudent = (req,res)=>{

    let newStudent = new studentModel(req.body.student)

    newStudent.save((err,student)=>{
        if(err){
            res.status(500).json({
                message:"some technical problem"
            })
        }else{
            res.status(200).json({
                message:"Student Sucessfully Added",
                student
            })
        }
    })
}

module.exports = {
    Addstudent
}