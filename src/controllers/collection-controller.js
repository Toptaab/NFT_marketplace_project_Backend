const catchError = require("../utils/catch-error");
const collectionModel = require("../models/collection-model");
const createError = require("../utils/createError");
const uploadService = require('../services/uploadCloud-service')
const fs = require('fs');

exports.getAllCollectionController = catchError(async (req,res,next) => {
 const result = await collectionModel.getAllColletion()

res.status(200).json(result)
})

exports.getCollectionByUserIdController = catchError(async (req,res,next) => {
  console.log(req.body)
const result = await collectionModel.getCollectionByUserId(req.body.userId)


  res.status(200).json(result)
})


exports.createdCollectionController = catchError(async (req, res, next) => {
  const existCollectionName = await collectionModel.getCollectionNameByName(
    req.body.name
  );
  if (existCollectionName) {
    createError(401, "this name already has been used");
  }

  const result = await collectionModel.createCollection(req.body);
  res.status(200).json(result);
});

exports.updateCollectionImageController = catchError(
  async (req, res, next) => {
    const checkCollectionOwner = await collectionModel.checkCollectionByUserId(
      req.body.userId,
      +req.params.collectionId
    );
    if (!checkCollectionOwner) {
      createError(403, "Unauthorized on this conllection");
    }
    req.body.image = await uploadService.uploadCloud(req.file.path,"NFT-marketplace/collections")

    await collectionModel.updateCollectionById(+req.params.collectionId,req.body.image)

    fs.unlink(req.file.path,()=>{})
  
    res.status(200).json("update image Sucess")
  }
);

// exports.updateCollectionPriceController = catchError(async (req, res, next) => {
//   const checkCollectionOwner = await collectionModel.checkCollectionByUserId(
//     req.body.userId,
//     +req.params.collectionId
//   );
//   if (!checkCollectionOwner) {
//     createError(403, "Unauthorized on this conllection");
//   }

//   await collectionModel.updateCollectionPrice(
//     req.params.collectionId,
//     req.body.price
//   );

//   res.status(200).json({ message: "Updated collection's price success!!" });
// });

exports.startMintCollectionController = catchError(async (req, res, next) => {
  const checkCollectionOwner = await collectionModel.checkCollectionByUserId(
    req.body.userId,
    +req.params.collectionId
  );
  if (!checkCollectionOwner) {
    createError(403, "Unauthorized on this conllection");
  }

  await collectionModel.startMintCollection(+req.params.collectionId);

  res.status(200).json({ message: "Start Mint Success!!" });
});

// exports.StopMintCollectionController = catchError(async (req, res, next) => {
//   const checkCollectionOwner = await collectionModel.checkCollectionByUserId(
//     req.body.userId,
//     +req.params.collectionId
//   );
//   if (!checkCollectionOwner) {
//     createError(403, "Unauthorized on this conllection");
//   }

//   await collectionModel.stopMintCollection(+req.params.collectionId);

//   res.status(200).json({ message: "Stop Mint Success!!" });
// });

exports.mintNftFromCollectionController = catchError (async (req,res,next)=> {
  console.log(req.body)

})
