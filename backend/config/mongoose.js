const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://rwn3developer11:eLx2eo8nctrrumg2@cluster0.tr84nrb.mongodb.net/");

//mongo connection
mongoose.connection.on("connected",()=>{
    console.log("successfully connected mongo");
})

mongoose.connection.on("error",()=>{
    console.log("not successfully connected mongo");
})

module.exports = {
    mongoose,
    Jwt_secret : "qwertyuiopkhgd"
}