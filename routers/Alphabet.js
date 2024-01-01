const { demo } = require('../controllers/alphabateControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router