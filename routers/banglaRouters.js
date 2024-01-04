const { getVowel, getNonVowel, getKar, getFola, getPunctuation_mark } = require('../controllers/banglaControllers')

const router = require('express').Router()

router.get('/vowel',getVowel)
    .get('/non_vowel',getNonVowel)
    .get('/kar',getKar)
    .get('/fola',getFola)
    .get('/punctuation_mark',getPunctuation_mark)


module.exports = router