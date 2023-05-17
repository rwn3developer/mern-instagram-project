const jwt = require('jsonwebtoken');
const {Jwt_secret} = require('../config/mongoose');
const mongoose = require('mongoose');
const User = require('../models/UserModel');

module.exports = (req,res,next) => {
   const {authorization} = req.headers;
   if(!authorization){
       return res.status(401).json({error : "you must have logged in"});
   }
   const token = authorization.replace("Bearer ","")
  
   jwt.verify(token,Jwt_secret,(err,payload)=>{
        if(err){
            return res.status(401).json({error : "you must have logged inn"});
        }
        const {_id} = payload
        User.findById(_id).then((userData)=>{
            console.log(userData);
        })
   })
    next();
}