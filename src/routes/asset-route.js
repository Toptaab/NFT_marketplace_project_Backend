const express = require('express')
const authorization = require('../middlewares/authorization')
const router = express.Router()
const assetController = require('../controllers/asset-controller')
const multerService = require('../services/multerImage-service')



router.post('/', authorization, assetController.createNft)
router.get('/',assetController.getAllNftController)
router.get('/count',assetController.getCountNftController)
router.get('/:assetId',assetController.getNftController)
router.get('/:assetId/buy', authorization, assetController.buyNftController)
router.post('/:assetId', authorization, assetController.sellNftController)
router.delete('/:assetId/cancel', authorization, assetController.cancelSaleNftController)
router.patch('/:assetId/update',authorization, assetController.updatePriceController)
router.patch('/:assetId/image',multerService.single('image'), authorization, assetController.updateNftImage)

module.exports = router