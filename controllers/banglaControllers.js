const BnAlphabet = require("../models/BnAlphabet")

exports.getVowel=async(req,res,next) =>{
    try {
        const data = await BnAlphabet.find({vowel : true}).sort({order_no : 1})
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

exports.getNonVowel=async(req,res,next) =>{
    try {
        const data = await BnAlphabet.find({vowel : false}).sort({order_no : 1})
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