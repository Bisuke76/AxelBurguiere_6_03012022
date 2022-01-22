const mongoose = require('mongoose');


const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true}
});

//sécurité conseillée pour ne pas avoir 2 fois la même adresse mail dans db
userSchema.plugin(uniqueValidator);


module.exports = mongoose.model("User", userSchema)