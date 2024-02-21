const express = require('express')
const authorization = require('../middlewares/authorization')
const router = express.Router()
const assetController = require('../controllers/asset-controller')
const multerService = require('../services/multerImage-service')



router.post('/', authorization, assetController.createNft)
router.get('/count',assetController.getCountNftController)
router.get('/:assetId',assetController.getNftController)
router.post('/:nftId', authorization, assetController.sellNftController)
router.patch('/:nftId/image',multerService.single('image'), authorization, assetController.updateNftImage)

module.exports = router