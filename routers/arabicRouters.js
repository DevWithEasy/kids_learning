const { demo } = require('../controllers/arabicControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router