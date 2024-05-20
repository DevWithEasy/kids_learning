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
const fs = require('fs')
const path = require('path')

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

exports.apply = async (req, res, next) => {
    try {
        const collection = await ArAlphabet.find().sort({ order_no: 1 })

        return res.status(200).json(collection)

    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.createDatabase = async (req, res, next) => {
    try {

        const [
            bangla_alphabet,
            bangla_kar,
            bangla_puncuation,
            bangla_fola,
            english_alphabet,
            arabic_alphabet,
            numbers,
            days,
            months,
            seasons,
            colors
        ] = await Promise.all([
            BnAlphabet.find().sort({ order_no: 1 }),
            Kar.find().sort({ order_no: 1 }),
            PuncuationMark.find().sort({ order_no: 1 }),
            Fola.find().sort({ order_no: 1 }),
            EnAlphabet.find().sort({ order_no: 1 }),
            ArAlphabet.find().sort({ order_no: 1 }),
            Number.find().sort({ order_no: 1 }),
            Day.find().sort({ order_no: 1 }),
            Month.find().sort({ order_no: 1 }),
            Season.find().sort({ order_no: 1 }),
            Color.find().sort({ order_no: 1 })
        ])

        //arabic alphabet - ok
        arabic_alphabet.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

            let video
            let audio
            try {
                audio = fs.readFileSync(`public/${element.audio}`);
                video = fs.readFileSync(`public/${element.video}`);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.letter,
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Arabic data inserted ${element.order_no}`);
                }
            })
        })

        //bangla alphabet - ok
        bangla_alphabet.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO BnAlphabet (order_no, letter, word, sentence, vowel, image, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

            let image
            let video
            let audio
            try {
                // Read the file synchronously
                image = fs.readFileSync(`public/${element.image}`);
                audio = fs.readFileSync(`public/${element.audio}`);
                video = fs.readFileSync(`public/${element.video}`);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.letter,
                element.word,
                element.sentence,
                element.vowel,
                audio,
                image,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Bangla data inserted ${element.order_no}`);
                }
            })
        })

        //punctuation marks - ok
        bangla_puncuation.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO PunctuationMark (order_no, name, mark, use_case, audio) VALUES (?, ?, ?, ?, ?)`;

            let audio
            try {
                // Read the file synchronously
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.name,
                element.mark,
                element.use_case,
                audio
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Punctuation data inserted ${element.order_no}`);
                }
            })

            //kar words add in table
            element.examples.forEach(ex => {
                const sql = `INSERT INTO PunctuationExample (punctuation_id, example_text) VALUES (?, ?)`;
                // Run SQL statement
                SQLdb.run(sql, [
                    element.order_no,
                    ex,
                ], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err.message);
                    } else {
                        console.log('Data inserted successfully');
                    }
                })
            })
        })

        //fola - ok
        bangla_fola.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Fola (order_no, letter, name, audio) VALUES (?, ?, ?, ?)`;

            let audio
            try {
                // Read the file synchronously
                audio = fs.readFileSync(`public/${element.audio}`);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.letter,
                element.name,
                audio
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Fola data inserted ${element.order_no}`);
                }
            })

            //fola example add in table
            element.examples.forEach(ex => {
                const sql = 'INSERT INTO FolaExample (fola_id, example_text)  VALUES (?, ?)'
                // Run SQL statement
                SQLdb.run(sql, [
                    element.order_no,
                    ex,
                ], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err.message);
                    } else {
                        console.log('Data inserted successfully');
                    }
                })
            })

        })

        //kar - ok
        bangla_kar.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Kar (order_no, letter, kar, image, audio) VALUES (?, ?, ?, ?, ?)`;

            let image
            let audio
            try {
                // Read the file synchronously
                image = fs.readFileSync(`public/${element.image}`)
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.letter,
                element.kar,
                audio,
                image
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Kar data inserted ${element.order_no}`);
                }
            })

            //kar words add in table
            element.kar_word.forEach(ex => {
                const sql = `INSERT INTO KarWord (kar_id, kar_word) VALUES (?, ?)`;
                // Run SQL statement
                SQLdb.run(sql, [
                    element.order_no,
                    ex,
                ], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err.message);
                    } else {
                        console.log('Data inserted successfully');
                    }
                })
            })

            //kar letters add in table
            element.kar_letter.forEach(ex => {
                const sql = `INSERT INTO KarLetter (kar_id, kar_letter) VALUES (?, ?)`;
                // Run SQL statement
                SQLdb.run(sql, [
                    element.order_no,
                    ex,
                ], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err.message);
                    } else {
                        console.log('Data inserted successfully');
                    }
                })
            })
        })

        //english alphabet - ok
        english_alphabet.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO EnAlphabet (order_no, capital, small, word, sentence, image, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

            let image
            let video
            let audio
            try {
                // Read the file synchronously
                image = fs.readFileSync(`public/${element.image}`);
                audio = fs.readFileSync(`public/${element.audio}`);
                video = fs.readFileSync(`public/${element.video}`);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.capital,
                element.small,
                element.word,
                element.sentence,
                audio,
                image,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`English data inserted ${element.order_no}`);
                }
            })
        })

        //numbers - ok
        numbers.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Number (letter, punctuation, lang, audio)
               VALUES (?, ?, ?, ?)`;

            let audio
            try {
                // Read the file synchronously
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.letter,
                element.punctuation,
                element.lang,
                audio,
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Number data inserted ${element.order_no}`);
                }
            })
        })

        //months - ok
        months.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Month (order_no, name, punctuation, lang, image, audio)
            VALUES (?, ?, ?, ?, ?, ?)`;

            let image
            let audio
            try {
                image = fs.readFileSync(`public/${element.image}`)
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.name,
                element.punctuation,
                element.lang,
                audio,
                image
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Month data inserted ${element.order_no}`);
                }
            })
        })

        //days - ok
        days.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Day (order_no, name, lang, image, audio) VALUES (?, ?, ?, ?, ?)`;

            let image
            let audio
            try {
                // Read the file synchronously
                image = fs.readFileSync(`public/${element.image}`)
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.name,
                element.lang,
                audio,
                image
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Days data inserted ${element.order_no}`);
                }
            })
        })

        //seasons - ok
        seasons.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Season (order_no, name, lang, image, audio)
               VALUES (?, ?, ?, ?, ?)`;

            let image
            let audio
            try {
                image = fs.readFileSync(`public/${element.image}`)
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.order_no,
                element.name,
                element.lang,
                audio,
                image
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Season data inserted ${element.order_no}`);
                }
            })
        })

        //colors - ok
        colors.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Color (bn_name, en_name, code, image, audio) VALUES (?, ?, ?, ?, ?)`;

            let image
            let audio
            try {
                // Read the file synchronously
                image = fs.readFileSync(`public/${element.image}`)
                audio = fs.readFileSync(`public/${element.audio}`)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: error.message
                });
            }
            // Run SQL statement
            SQLdb.run(sql, [
                element.bn_name,
                element.en_name,
                element.code,
                audio,
                image
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log(`Colors data inserted ${element.order_no}`);
                }
            })
        })

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Database create successfully.'
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.createJavaScript = async (req, res, next) => {
    try {
        const [
            bangla_alphabet,
            bangla_kar,
            bangla_puncuation,
            bangla_fola,
            english_alphabet,
            arabic_alphabet,
            numbers,
            days,
            months,
            seasons,
            colors
        ] = await Promise.all([
            BnAlphabet.find().sort({ order_no: 1 }),
            Kar.find().sort({ order_no: 1 }),
            PuncuationMark.find().sort({ order_no: 1 }),
            Fola.find().sort({ order_no: 1 }),
            EnAlphabet.find().sort({ order_no: 1 }),
            ArAlphabet.find().sort({ order_no: 1 }),
            Number.find().sort({ order_no: 1 }),
            Day.find().sort({ order_no: 1 }),
            Month.find().sort({ order_no: 1 }),
            Season.find().sort({ order_no: 1 }),
            Color.find().sort({ order_no: 1 })
        ])

        let importText = ''

        //bangla alphabet
        const bangla_alphabet_convert = bangla_alphabet.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            const videoUrl = alphabet.video.split('/')[alphabet.video.split('/').length - 1]
            const videoText = videoUrl.split('.')[0]
            importText += `import ${'video_' + videoText} from '../assets/video/${videoUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end',
                video: 'start_video_' + videoText + '_end'
            }
        })

        //bangla punctuation
        const punctuation_mark_convert = bangla_puncuation.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            return {
                ...alphabet._doc,
                audio: 'start_audio_' + audioText + '_end',
            }
        })

        //bangla fola
        const fola_convert = bangla_fola.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            return {
                ...alphabet._doc,
                audio: 'start_audio_' + audioText + '_end',
            }
        })

        const kar_convert = bangla_kar.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end'
            }
        })

        //arabic alphabet
        const arabic_alphabet_convert = arabic_alphabet.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const videoUrl = alphabet.video.split('/')[alphabet.video.split('/').length - 1]
            const videoText = videoUrl.split('.')[0]
            importText += `import ${'video_' + videoText} from '../assets/video/${videoUrl}'\n`

            return {
                ...alphabet._doc,
                audio: 'start_audio_' + audioText + '_end',
                video: 'start_video_' + videoText + '_end'
            }
        })

        //english alphabet
        const enslish_alphabet_convert = english_alphabet.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            const videoUrl = alphabet.video.split('/')[alphabet.video.split('/').length - 1]
            const videoText = videoUrl.split('.')[0]
            importText += `import ${'video_' + videoText} from '../assets/video/${videoUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end',
                video: 'start_video_' + videoText + '_end'
            }
        })

        //numbers
        const number_convert = numbers.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            return {
                ...alphabet._doc,
                audio: 'start_audio_' + audioText + '_end',
            }
        })

        //days
        const day_convert = days.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end'
            }
        })

        //months
        const month_convert = months.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end'
            }
        })

        //seasons
        const season_convert = seasons.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end'
            }
        })

        //colors
        const color_convert = colors.map(alphabet => {

            const audioUrl = alphabet.audio.split('/')[alphabet.audio.split('/').length - 1]
            const audioText = audioUrl.split('.')[0]
            importText += `import ${'audio_' + audioText} from '../assets/audio/${audioUrl}'\n`

            const imageUrl = alphabet.image.split('/')[alphabet.image.split('/').length - 1]
            const imageText = imageUrl.split('.')[0]
            importText += `import ${'image_' + imageText} from '../assets/image/${imageUrl}'\n`

            return {
                ...alphabet._doc,
                image: 'start_image_' + imageText + '_end',
                audio: 'start_audio_' + audioText + '_end'
            }
        })

        const jsContent = `
        ${importText}

        const data = {
            bangla_alphabets: ${JSON.stringify(bangla_alphabet_convert, null, 2)},
            bagla_punctuation_marks : ${JSON.stringify(punctuation_mark_convert, null, 2)},
            bangla_fola : ${JSON.stringify(fola_convert, null, 2)},
            bangla_kar : ${JSON.stringify(kar_convert, null, 2)},
            arabic_alphabets : ${JSON.stringify(arabic_alphabet_convert, null, 2)},
            enslish_alphabets : ${JSON.stringify(enslish_alphabet_convert, null, 2)},
            numbers : ${JSON.stringify(number_convert, null, 2)},
            days : ${JSON.stringify(day_convert, null, 2)},
            months : ${JSON.stringify(month_convert, null, 2)},
            seasons : ${JSON.stringify(season_convert, null, 2)},
            colors : ${JSON.stringify(color_convert, null, 2)},
        };
        export default data
        `

        // const jsContent = `const data = {
        //     colors: ${JSON.stringify(data, null, 2)}
        // };`        

        const filePath = path.join(process.cwd(), 'public', 'main.js');

        fs.writeFile(filePath, jsContent, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Server Error');
            } else {
                return res.status(200).json({
                    success : true,
                    message : 'File Successfully Generated.'
                })
            }
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}