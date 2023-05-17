const express = require('express');

const routes = express.Router();

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const POST = require('../models/post');

routes.post('/createPost',requireLogin,(req,res)=>{
    const {title,body} = req.body;

    if(!title || !body){
        return res.status(402).json({error : "please add all the fields"})
    }
    const post =  new POST({
        title,
        body,
        postedBy : req.user
    })
    post.save().then((result)=>{
        return res.json({post : result})
    }).catch(error => console.log(error));
})

module.exports = routes;