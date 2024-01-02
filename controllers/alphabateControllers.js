const ArAlphabet = require("../models/ArAlphabet")
const BnAlphabet = require("../models/BnAlphabet")
const Day = require("../models/Day")
const EnAlphabet = require("../models/EnAlphabet")
const Kar = require("../models/Kar")
const Month = require("../models/Month")
const Season = require("../models/Season")

exports.getAll=async(req,res,next) =>{
    try {
        const {lang} = req.params
        const collection = lang == 'bn' ?
            BnAlphabet : lang == 'en' ? 
            EnAlphabet : lang == 'ar' ? 
            ArAlphabet : lang == 'kar' ?
            Kar : lang == 'day' ?
            Day : lang == 'month' ?
            Month : Season

        const data = await collection.find({}).sort({'order_no' : 1})

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully find.',
            data
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.bnAlphabetUpdate=async(req,res,next) =>{
    try {
        
        await BnAlphabet.findByIdAndUpdate(req.params.id,{
            $set : {
                order_no : req.body.order_no
            }
        })
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}
exports.enAlphabetUpdate=async(req,res,next) =>{
    try {
        
        await EnAlphabet.findByIdAndUpdate(req.params.id,{
            $set : {
                order_no : req.body.order_no
            }
        })
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.arAlphabetUpdate=async(req,res,next) =>{
    try {
        
        await ArAlphabet.findByIdAndUpdate(req.params.id,{
            $set : {
                order_no : req.body.order_no
            }
        })
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.dayUpdate=async(req,res,next) =>{
    try {
        
        await Day.findByIdAndUpdate(req.params.id,{
            $set : {
                order_no : req.body.order_no
            }
        })
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.monthUpdate=async(req,res,next) =>{
    try {
        
        await Month.findByIdAndUpdate(req.params.id,{
            $set : {
                order_no : req.body.order_no
            }
        })
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.seasonUpdate=async(req,res,next) =>{
    try {
        
        await Season.findByIdAndUpdate(req.params.id,{
            $set : {
                order_no : req.body.order_no
            }
        })
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}