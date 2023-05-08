const express = require('express');

const port = 9000;

const app = express();

const cors = require('cors');

const data = require('./data');

app.use(cors());

app.get('/',(req,res)=>{
    return res.json(data);
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("server is start on port :- "+port);
})