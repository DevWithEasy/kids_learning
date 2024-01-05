const EnAlphabet = require("../models/EnAlphabet")
const Number = require("../models/Number")

exports.getLetters=async(req,res,next) =>{
    try {
        const data = await EnAlphabet.find().sort({order_no : 1})
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : data
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}
exports.getEnNumber=async(req,res,next) =>{
    try {
        const data = await Number.find({lang : 'en'}).sort({letter : 1})
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : data
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.demo=async(req,res,next) =>{
    try {
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}