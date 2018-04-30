var express=require('express');
var jwt = require('jsonwebtoken');
var router =express.Router();
var user =require('../models/user');

// var token = jwt.sign(decoded, 'deeksha');        
// var decoded = jwt.verify(token, 'shhhhh');
var token =""
router.post('/signup',(req,res)=>{
    user.create(req.body,function(err,post){
        if(err)console.log(err)
        res.json(post)
    })
})
router.get('/login',(req,res)=>{
    user.findOneAndUpdate({phone:9652737295},{accessible:true},function(err,user){
        if(err)console.log(err)
        var decoded={phone:user.phone,password:user.password}
        token = jwt.sign(decoded, 'deeksha');           
        res.json(token)
    })
})
module.exports=router;