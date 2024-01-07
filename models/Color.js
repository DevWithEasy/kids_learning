const mongoose = require('mongoose');

const colorSchema = mongoose.Schema({
    bn_name:{
        type: String,
        required:true
    },
    en_name:{
        type: String,
        required:true
    },
    code:{
        type: String,
        required:true
    },
    image : {
        type: String,
    },
    audio:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const Color = mongoose.model('Color',colorSchema)
module.exports = Color