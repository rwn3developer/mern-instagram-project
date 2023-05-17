const express = require('express');

const routes = express.Router();

const UserModel = require('../models/UserModel');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const {Jwt_secret} = require('../config/mongoose');
const requireLogin = require('../middlewares/requireLogin');


routes.get('/',(req,res)=>{
    return res.json("jay mataji");
})

routes.get('/createPost',requireLogin,(req,res)=>{ 
    console.log("hello post");
})

routes.post('/signup',(req,res)=>{
    
    const {name,username,email,password} = req.body;

    if(!name || !username || !email || !password){
        return res.status(422).json({error: "please add all the fields"});
    }

    //email or username duplicate entry not allowed
    UserModel.findOne({ $or : [{email : email},{username : username}] })
    .then((users)=>{
        if(users){
            return res.status(422).json({error : "User already exist with that email or username"});
        }


            bcrypt.hash(password,12).then((hasedPassword)=>{
                const user = new UserModel({
                    name,
                    username,
                    email,
                    password : hasedPassword
                })
            
                user.save()
                .then(user => {res.json({message: "Register successfully"})})
                .catch(err => console.log(err));
            })

        

        }).catch((err)=>{
            console.log(err);
        })


    
    
});

routes.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({error : "please fill email and password"});
    }
    UserModel.findOne({email : email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error : "Invalid email"});
        }
       bcrypt.compare(password,savedUser.password).then((match)=>{
            if(match){
                // return res.status(200).json({message : "Signed in successfully"});
                const token  = jwt.sign({_id : savedUser.id},Jwt_secret);
                return res.json({token : token})
            }else{
                return res.status(422).json({error : "Invalid password"});
            }
       })
       .catch(err => console.log(err));
    })
})


module.exports = routes;