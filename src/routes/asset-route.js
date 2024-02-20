const express = require('express')
const authorization = require('../middlewares/authorization')
const router = express.Router()
const assetController = require('../controllers/asset-controller')
const multerService = require('../services/multerImage-service')


router.get('/:assetId',assetController.getAllNftController)
router.post('/', authorization, assetController.createNft)
router.patch('/:nftId/image',multerService.single('image'), authorization, assetController.updateNftImage)
router.post('/:nftId', authorization, assetController.sellNftController)

module.exports = router