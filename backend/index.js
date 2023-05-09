const express = require('express');

const port = 9000;

const app = express();

const db = require('./config/mongoose');

const cors = require('cors');



app.use(cors()); //

app.use(express.json());

app.use('/',require('./router/auth'));


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("server is start on port :- "+port);
})