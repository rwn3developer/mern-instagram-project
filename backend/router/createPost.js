const express = require('express');

const routes = express.Router();

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const POST = require('../models/post');


//create post 
routes.post('/createPost',requireLogin,(req,res)=>{
    const {body,pic} = req.body;

    if(!body || !pic){
        return res.status(402).json({error : "please add all the fields"})
    }
    const post =  new POST({
        body,
        photo : pic,
        postedBy : req.user
    })
    post.save().then((result)=>{
        return res.json({post : result})
    }).catch(error => console.log(error));
})

module.exports = routes;