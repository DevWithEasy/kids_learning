const { demo } = require('../controllers/englishControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router