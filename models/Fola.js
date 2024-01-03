const mongoose = require('mongoose');

const folaSchema = mongoose.Schema({
    order_no:{
        type: Number,
        required:true
    },
    letter:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
        unique:true,
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

const Fola = mongoose.model('Fola',folaSchema)
module.exports = Fola