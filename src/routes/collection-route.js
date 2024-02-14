const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authorization')
const collectionController = require('../controllers/collection-controller')
const { createCollectionValidate } = require('../middlewares/validators/validate-collection')


router.post('/' ,createCollectionValidate ,authenticate , collectionController.createdCollectionController)
router.patch('/:collectionId/startmint',authenticate )
router.patch('/:collectionId/mint',authenticate)


module.exports = router