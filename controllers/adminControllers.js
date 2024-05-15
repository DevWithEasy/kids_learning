const SQLdb = require("../config/SQLdb")
const ArAlphabet = require("../models/ArAlphabet")
const BnAlphabet = require("../models/BnAlphabet")
const Color = require("../models/Color")
const Day = require("../models/Day")
const EnAlphabet = require("../models/EnAlphabet")
const Fola = require("../models/Fola")
const Kar = require("../models/Kar")
const Month = require("../models/Month")
const Number = require("../models/Number")
const PuncuationMark = require("../models/PuncuationMark")
const Season = require("../models/Season")
const banglaOkkor = require("./banglaOkkor")

exports.getAll = async (req, res, next) => {
    try {
        const { lang } = req.params
        const collection = lang == 'bn' ?
            BnAlphabet : lang == 'en' ?
                EnAlphabet : lang == 'ar' ?
                    ArAlphabet : lang == 'kar' ?
                        Kar : lang == 'day' ?
                            Day : lang == 'month' ?
                                Month : Season

        const data = await collection.find({}).sort({ 'order_no': 1 })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully find.',
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.bnAlphabetUpdate = async (req, res, next) => {
    try {

        await BnAlphabet.findByIdAndUpdate(req.params.id, {
            $set: {
                order_no: req.body.order_no
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.enAlphabetUpdate = async (req, res, next) => {
    try {

        await EnAlphabet.findByIdAndUpdate(req.params.id, {
            $set: {
                order_no: req.body.order_no
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.arAlphabetUpdate = async (req, res, next) => {
    try {

        await ArAlphabet.findByIdAndUpdate(req.params.id, {
            $set: {
                order_no: req.body.order_no
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.dayUpdate = async (req, res, next) => {
    try {

        await Day.findByIdAndUpdate(req.params.id, {
            $set: {
                order_no: req.body.order_no
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.monthUpdate = async (req, res, next) => {
    try {

        await Month.findByIdAndUpdate(req.params.id, {
            $set: {
                order_no: req.body.order_no
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.seasonUpdate = async (req, res, next) => {
    try {

        await Season.findByIdAndUpdate(req.params.id, {
            $set: {
                order_no: req.body.order_no
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getNumber = async (req, res, next) => {
    try {

        const numbers = await Number.find({ lang: 'en' })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.',
            data: numbers
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.numberUpdate = async (req, res, next) => {
    try {

        await Number.findByIdAndUpdate(req.params.id, {
            $set: {
                letter: req.body.letter,
                punctuation: req.body.punctuation
            }
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}
const fs = require('fs')
const path = require('path')

exports.apply = async (req, res, next) => {
    try {
        const collection = await PuncuationMark.find()

        collection.forEach(element => {

            // SQL INSERT query
            const sql = `INSERT INTO PunctuationMark (order_no, name, mark, use_case, audio)
               VALUES (?, ?, ?, ?, ?)`;
            let image;
            let audio;
            try {
                // Read the file synchronously
                // image = fs.readFileSync(`public/${element.image}`);
                audio = fs.readFileSync(`public/${element.audio}`);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }

            SQLdb.run(sql, [
               
                element.order_no, element.name, element.mark,element.use_case,
                audio
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
                }
            })
        })


        return res.status(200).json(collection)

    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getColors = async (req, res, next) => {
    try {

        const data = await Color.find({})

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.',
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getDays = async (req, res, next) => {
    try {
        const { q } = req.query
        const data = await Day.find({ lang: q })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.',
            data: data.sort((a, b) => a?.order_no - b?.order_no)
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getMonth = async (req, res, next) => {
    try {
        const { q } = req.query
        const data = await Month.find({ lang: q })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.',
            data: data.sort((a, b) => a?.order_no - b?.order_no)
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getSeason = async (req, res, next) => {
    try {
        const { q } = req.query
        const data = await Season.find({ lang: q })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully updated.',
            data: data.sort((a, b) => a?.order_no - b?.order_no)
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}