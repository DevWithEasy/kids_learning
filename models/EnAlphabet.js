const mongoose = require('mongoose');

const enSchema = mongoose.Schema({
    capital:{
        type: String,
        required:true
    },
    small:{
        type: String,
        required:true
    },
    word:{
        type: String,
        // required:true
    },
    sentence:{
        type: String,
        // required:true
    },
    image:{
        type: String,
        required:true
    },
    audio:{
        type: String,
        required:true
    },
    video : {
        type: String,
        required:true
    }
},{
    timestamps:true
})

const EnAlphabet = mongoose.model('EnAlphabet',enSchema)
module.exports = EnAlphabet