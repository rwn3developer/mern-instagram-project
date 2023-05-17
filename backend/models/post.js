const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        default : "no photo"
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
})


const post = mongoose.model('post',postSchema);
module.exports = post;