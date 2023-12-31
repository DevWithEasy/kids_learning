const mongoose = require('mongoose');

const seasonSchema = mongoose.Schema({
    order_no:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
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
    },
},{
    timestamps:true
})

const Season = mongoose.model('Season',seasonSchema)
module.exports = Season