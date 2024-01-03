const { demo } = require('../controllers/dayControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router