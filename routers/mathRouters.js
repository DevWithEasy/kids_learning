const { demo } = require('../controllers/mathControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router