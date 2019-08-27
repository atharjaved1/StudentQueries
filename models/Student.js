var mongoose = require('mongoose');

bcrypt = require("bcrypt-nodejs");

SALT_WORK_FACTOR = 10;




const studentSchema = mongoose.Schema({
    studentName:{
        type:String,
        lowercase:true
    },
    mobile:{
        type:String,
        lowercase:true
    }

})

studentSchema.pre("save", function(next){
    // call all schema elements
    var studentUser = this;

    if(!studentUser.isModified('mobile')) return next();


    //generate salt

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err)
        return next(err);

        // hash the new password using our salt

        bcrypt.hash(studentUser.mobile, salt, null, function(err, hash){
            if(err)
            return next(err);

            //set the hashed password on our user document
            studentUser.mobile = hash;
            next();
        });
    });
});

// studentSchema.method.comparePassword = function(candidatePassword, cb){
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
//         if(err) return cb(err);

//         cb(null, isMatch);
//     })
// }



module.exports = mongoose.model('student',studentSchema);