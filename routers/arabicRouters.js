const { demo } = require('../controllers/adminControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router