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
        // collection.forEach(element => {
        //     // SQL INSERT query
        //     const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
        //        VALUES (?, ?, ?, ?, ?, ?, ?)`;
        //     let video;
        //     let audio;
        //     try {
        //         // Read the file synchronously
        //         // image = fs.readFileSync(`public/${element.image}`);
        //         audio = fs.readFileSync(`public/${element.audio}`);
        //         video = fs.readFileSync(`public/${element.video}`);
        //     } catch (error) {
        //         return res.status(500).json({
        //             success: false,
        //             status: 500,
        //             message: error.message
        //         });
        //     }
        //     // Run SQL statement
        //     SQLdb.run(sql, [
        //         element.order_no,
        //         element.letter,
        //         element.position.start,
        //         element.position.center,
        //         element.position.end,
        //         audio,
        //         video
        //     ], (err) => {
        //         if (err) {
        //             console.error('Error inserting data:', err.message);
        //         } else {
        //             console.log('Data inserted successfully');
        //         }
        //     })
        // })

        // collection.forEach(elm => {
        //     elm.examples.forEach(ex => {
        //         const sql = 'INSERT INTO FolaExample (fola_id, example_text)  VALUES (?, ?)'
        //         // Run SQL statement
        //         SQLdb.run(sql, [
        //             elm.order_no,
        //             ex,
        //         ], (err) => {
        //             if (err) {
        //                 console.error('Error inserting data:', err.message);
        //             } else {
        //                 console.log('Data inserted successfully');
        //             }
        //         })
        //     })
        // })

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
                    console.log('Data inserted successfully');
                }
            })
        })

        //bangla alphabet
        bangla_alphabet.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
                }
            })
        })

        //punctuation marks
        bangla_puncuation.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
                }
            })
        })

        //fola
        bangla_fola.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
                }
            })
        })

        //kar
        bangla_kar.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
                }
            })
        })

        //english alphabet
        english_alphabet.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
                }
            })
        })

        //numbers
        numbers.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
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
                    console.log('Data inserted successfully');
                }
            })
        })

        //days
        days.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO ArAlphabet (order_no, letter, start_position, center_position, end_position, audio, video)
               VALUES (?, ?, ?, ?, ?, ?, ?)`

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
                element.position.start,
                element.position.center,
                element.position.end,
                audio,
                video
            ], (err) => {
                if (err) {
                    console.error('Error inserting data:', err.message);
                } else {
                    console.log('Data inserted successfully');
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
                    console.log('Data inserted successfully');
                }
            })
        })

        //colors
        colors.forEach(element => {
            // SQL INSERT query
            const sql = `INSERT INTO Color (bn_name, en_name, code, image, audio)
            VALUES (?, ?, ?, ?, ?)`;

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
                    console.log('Data inserted successfully');
                }
            })
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

        const hello = bangla_alphabet.map(alpha=> {
            const urlText = alpha.image.split('/')[alpha.image.split('/').length-1]
            const nameText = urlText.split('.')[0]
            return `import ${nameText} from '../assets/image/${urlText}'`
        })
        console.log(hello)

        // const jsContent = `const data = {
        //     colors: ${JSON.stringify(hello, null, 2)}
        // };`        

        // const filePath = path.join(process.cwd(), 'public', 'main.js');

        // fs.writeFile(filePath,jsContent,(err)=>{
        //     if (err) {
        //         console.error('Error writing file:', err);
        //         return res.status(500).send('Server Error');
        //     }else{
        //         return res.status(200).json(colors)
        //     }
        // })


    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}