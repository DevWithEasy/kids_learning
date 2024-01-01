const mongoose = require('mongoose');

const bnSchema = mongoose.Schema({
    order_no:{
        type: Number,
        // required:true
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
    vowel : {
        type : Boolean,
        required : true
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

const BnAlphabet = mongoose.model('BnAlphabet',bnSchema)
module.exports = BnAlphabet