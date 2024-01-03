const { demo } = require('../controllers/banglaControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router