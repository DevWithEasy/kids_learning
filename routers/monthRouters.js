const { demo } = require('../controllers/monthControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router