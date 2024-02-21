const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authorization')
const collectionController = require('../controllers/collection-controller')
const { createCollectionValidate } = require('../middlewares/validators/validate-collection')
const multerService = require('../services/multerImage-service')


router.get('/', collectionController.getAllCollectionController )
router.get('/createNft',authenticate, collectionController.getCollectionByUserIdController )
router.get('/:collectionId',authenticate,collectionController.getCollectionByCollectionIdController)
router.post('/' , createCollectionValidate, authenticate , collectionController.createdCollectionController )
router.patch('/:collectionId/image' ,multerService.single('image'),authenticate    ,collectionController.updateCollectionImageController )
router.patch('/:collectionId/startmint',authenticate,collectionController.startMintCollectionController  )
router.patch('/:collectionId/mint',authenticate, collectionController.mintNftFromCollectionController)


module.exports = router