const express = require('express')
const router = express.Router()

router.get('/:userId' ,()=> console.log("Me!!"))


module.exports = router