const ArAlphabet = require('../models/ArAlphabet')
const BnAlphabet = require('../models/BnAlphabet')
const Number = require('../models/BnNumber')
const Day = require('../models/Day')
const EnAlphabet = require('../models/EnAlphabet')
const Month = require('../models/Month')
const Season = require('../models/Season')
const data = require('./banglaOkkor')

exports.demo=async(req,res,next) =>{
    try {
        data.month_english
        .forEach(async(a,i)=>{
            const newAlphabate = new Month({
                ...a,
                lang : 'en',
                image : `/image/month_${i+1}.png`,
                audio : `/audio/en_month_${i+1}.mp3`,
                // video : `/video/en_num${i+1}.mp4`
            })
            newAlphabate.save()
        })
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