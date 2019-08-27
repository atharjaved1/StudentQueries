var mongoose = require('mongoose')

const enrollSchema = mongoose.Schema({
StudId:{
    type:mongoose.Schema.ObjectId,
    ref:'student'
},
CId:{
    type:mongoose.Schema.ObjectId,
    ref:'course'
}

})

enrollSchema.index({StudId:1,CId:1},{unique:true})

module.exports = mongoose.model('enroll',enrollSchema)