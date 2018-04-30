
var mongoose = require('mongoose');
var schema =new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    password:String,
    accessible:Boolean
})

module.exports=mongoose.model('user',schema)