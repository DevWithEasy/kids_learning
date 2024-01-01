const mongoose = require('mongoose');

const ArSchema = mongoose.Schema({
    order_no:{
        type: Number,
        required:true
    },
    letter:{
        type: String,
        required:true,
        unique:true,
    },
    word:{
        type: String,
        // required:true
    },
    sentence:{
        type: String,
        // required:true
    },
    position:{
        start : {
            type: String,
        },
        center : {
            type: String,
        },
        end : {
            type: String,
        },
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

const ArAlphabet = mongoose.model('ArAlphabet',ArSchema)
module.exports = ArAlphabet