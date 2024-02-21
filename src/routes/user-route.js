const express = require('express')
const router = express.Router()
const userController = require('../controllers/user-controller')
const authenticate = require('../middlewares/authorization')
const { validateUpdateProfile } = require('../middlewares/validators/validate-user')



router.get('/',authenticate,userController.getMeController )
router.get('/count', userController.getCountUserController)
router.get('/:targetId',authenticate,userController.getAllAssetsController)
router.post('/wallet',authenticate , userController.createWalletController )
router.patch('/',validateUpdateProfile, authenticate , userController.updateUserPofileController )


module.exports = router