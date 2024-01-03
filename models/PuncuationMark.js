const mongoose = require('mongoose');

const puncuationMarkSchema = mongoose.Schema({
    order_no:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true,
        unique:true,
    },
    mark:{
        type: String,
        required:true
    },
    use_case:{
        type: String,
        required:true
    },
    examples : [
        {
            type : String,
            required : true
        }
    ],
    audio:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const PuncuationMark = mongoose.model('PuncuationMark',puncuationMarkSchema)
module.exports = PuncuationMark