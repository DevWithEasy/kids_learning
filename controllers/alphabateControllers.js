const BnAlphabet = require('../models/BnAlphabet')
const data = require('./banglaOkkor')

exports.demo=async(req,res,next) =>{
    try {
        // data.bangla
        // .filter(a=>a.vowel == false)
        // .forEach(async(a,i)=>{
        //     const newAlphabate = new BnAlphabet({
        //         ...a,
        //         image : `/image/bn_b_${i+1}.png`,
        //         audio : `/audio/bn_b_${i+1}.mp3`,
        //         video : `/video/bn_b_${i+1}.mp4`
        //     })
        //     await newAlphabate.save()
        // })
        console.log(data.bangla.filter(a=>a.vowel == false))
        return res.status(200).json({
            success : false,
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