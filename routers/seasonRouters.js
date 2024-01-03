const { demo } = require('../controllers/seasonControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router