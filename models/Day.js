const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
    order_no:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    lang:{
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

const Day = mongoose.model('Day',daySchema)
module.exports = Day