const { demo, getAll } = require('../controllers/alphabateControllers')

const router = require('express').Router()

router.get('/:lang',getAll)


module.exports = router