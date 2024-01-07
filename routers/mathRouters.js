const { getNumbers } = require('../controllers/mathControllers')

const router = require('express').Router()

router.get('/',getNumbers)


module.exports = router