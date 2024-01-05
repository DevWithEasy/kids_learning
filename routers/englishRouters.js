const { getLetters, getEnNumber } = require('../controllers/englishControllers')

const router = require('express').Router()

router.get('/',getLetters)
    .get('/number',getEnNumber)


module.exports = router