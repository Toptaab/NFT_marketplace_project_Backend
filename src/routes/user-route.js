const express = require('express')
const router = express.Router()
const userController = require('../controllers/user-controller')
const authenticate = require('../middlewares/authorization')
const { validateUpdateProfile } = require('../middlewares/validators/validate-user')
const multerImageService = require('../services/multerImage-service')



router.get('/',authenticate,userController.getMeController )
router.get('/allUser',userController.getAllUserController )
router.get('/count', userController.getCountUserController)
router.get('/:targetId',userController.getAllAssetsController)
router.post('/wallet',authenticate , userController.createWalletController )
router.patch('/',validateUpdateProfile, authenticate , userController.updateUserPofileController )
router.patch('/add', authenticate , userController.addBalanceController )
router.patch('/image',multerImageService.single('image'),validateUpdateProfile, authenticate , userController.updateUserPofileImageController )


module.exports = router