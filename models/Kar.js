const mongoose = require('mongoose');

const karSchema = mongoose.Schema({
    order_no:{
        type: Number,
        required:true
    },
    letter:{
        type: String,
        required:true
    },
    kar:{
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
    kar_letter:{
        type: [
            {
                type: String,
                required:true
            }
        ],
        required:true,
        default : []
    },
    kar_word:{
        type: [
            {
                type: String,
                required:true
            }
        ],
        required:true,
        default : []
    },
},{
    timestamps:true
})

const Kar = mongoose.model('Kar',karSchema)
module.exports = Kar