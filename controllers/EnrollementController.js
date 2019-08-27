const enrollSchema = require('../models/enrollement')

const addEnroll = (req,res)=>{ 

    let newEnroll = new enrollSchema(req.body.enroll)
    
    newEnroll.save((err,enroll)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json({
                message:"enrolled successfully",enroll
            })
        }
    })
}
module.exports = {
    addEnroll
}