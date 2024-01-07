const ArAlphabet = require("../models/ArAlphabet")

exports.getArabic=async(req,res,next) =>{
    try {
        const data = await ArAlphabet.find({}).sort({order_no : 1})
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