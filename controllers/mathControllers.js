const Number = require("../models/Number")
const BnToEn = require('banglanumber-to-englishnumber')

exports.getNumbers=async(req,res,next) =>{
    try {
        const data = await Number.find({lang : 'bn'})
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : data.sort((a,b)=> BnToEn(a.letter) - BnToEn(b.letter))
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