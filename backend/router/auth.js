const express = require('express');

const routes = express.Router();

const UserModel = require('../models/UserModel');

const bcrypt = require('bcrypt');


routes.get('/',(req,res)=>{
    return res.json("jay mataji");
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


module.exports = routes;