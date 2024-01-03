const { getVowel, getNonVowel } = require('../controllers/banglaControllers')

const router = require('express').Router()

router.get('/vowel',getVowel)
    .get('/non_vowel',getNonVowel)


module.exports = router