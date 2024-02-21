const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authorization')
const historyContoller = require('../controllers/history-controller')


router.get('/count', historyContoller.getCountHistoryController)


module.exports = router