const mongoose = require('mongoose');

const numberSchema = mongoose.Schema({
    letter:{
        type: String,
        required:true
    },
    punctuation:{
        type: String,
        required:true
    },
    lang : {
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

const Number = mongoose.model('Number',numberSchema)
module.exports = Number