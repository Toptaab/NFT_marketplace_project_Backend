const express = require('express')
const authController = require('../controllers/auth-controller')
const { validateRegister, validateLogin } = require('../middlewares/validators/validate-register')

const router = express.Router()


router.post('/register',validateRegister, authController.register)
router.post('/login', authController.login)



module.exports = router