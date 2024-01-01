const ArAlphabet = require("../models/ArAlphabet")
const BnAlphabet = require("../models/BnAlphabet")
const EnAlphabet = require("../models/EnAlphabet")

exports.getAll=async(req,res,next) =>{
    try {
        const {lang} = req.params
        const collection = lang == 'bn' ? BnAlphabet : lang == 'en' ? EnAlphabet : ArAlphabet

        collection.updateMany({},{
            $set : {
                order_no : 0
            }
        })
        // const data = await collection.find({}).sort({letter : -1})

        // return res.status(200).json({
        //     success : true,
        //     status : 200,
        //     message : 'Successfully completed the proccess',
        //     data
        // })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.update=async(req,res,next) =>{
    try {
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully completed the proccess'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}