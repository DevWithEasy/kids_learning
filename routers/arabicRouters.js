const { demo, getArabic } = require('../controllers/arabicControllers')

const router = require('express').Router()

router.get('/',getArabic)


module.exports = router