const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    body : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
})


const post = mongoose.model('post',postSchema);
module.exports = post;