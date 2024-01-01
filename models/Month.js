const mongoose = require('mongoose');

const monthSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    punctuation:{
        type: String,
    },
    lang : {
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    audio:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const Month = mongoose.model('Month',monthSchema)
module.exports = Month